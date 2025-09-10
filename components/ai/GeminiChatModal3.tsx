"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGeminiChat, Message } from "@/hooks/useGeminiChat";

type GeminiChatModalProps = {
  trigger: React.ReactNode;
};

type Mode = "gemini" | "google" | "youtube";

type SearchResult = {
  link?: string;
  url?: string;
  title?: string;
  name?: string;
  snippet?: string;
  description?: string;
};

export default function GeminiChatModal({ trigger }: GeminiChatModalProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("gemini");
  const [messages, setMessages] = useState<Message[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { sendMessage } = useGeminiChat();

  const SYSTEM_PROMPT: Message = {
    sender: "system",
    text: `أنت مساعد ذكي. أجب بدقة واختصار. لا تتجاوز 5 أسطر. اشرح اي سؤال عن الممارسات التدريسية ولا تضف معلومات غير ضرورية.`,
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");
    setResults([]);

    const newUserMessage: Message = { sender: "user", text: trimmed };
    const newMessages = [SYSTEM_PROMPT, ...messages, newUserMessage];
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    try {
      const reply = await sendMessage(newMessages);
      const aiMessage: Message = {
        sender: "ai",
        text: reply ?? "❌ تعذر الحصول على رد من المساعد.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch  {
      setError("حدث خطأ أثناء التواصل مع Gemini.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchFromAI = async (searchType: "google" | "youtube") => {
    const lastAIMessage = [...messages].reverse().find((msg) => msg.sender === "ai");

    if (!lastAIMessage) {
      setError("❗ لا يوجد رد من المساعد بعد للبحث عنه.");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(
        `/api/search/${searchType}?q=${encodeURIComponent(lastAIMessage.text)}`
      );
      const data = await res.json();
      setResults(
        data.organic_results || data.video_results || data.items || []
      );
      setMode(searchType);
    } catch  {
      setError("❌ فشل في جلب نتائج البحث.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-right">💡 المساعد الآلي</DialogTitle>
        </DialogHeader>

        {/* أزرار الوضع */}
        <div className="flex justify-end gap-2 mb-2">
          <Button
            variant={mode === "gemini" ? "default" : "outline"}
            onClick={() => setMode("gemini")}
          >
            مساعد
          </Button>
          <Button
            variant={mode === "google" ? "default" : "outline"}
            onClick={() => handleSearchFromAI("google")}
          >
            Google
          </Button>
          <Button
            variant={mode === "youtube" ? "default" : "outline"}
            onClick={() => handleSearchFromAI("youtube")}
          >
            YouTube
          </Button>
        </div>

        {/* عرض الرسائل أو النتائج */}
        <div className="flex-1 overflow-y-auto border p-4 rounded-lg space-y-2 text-right bg-muted">
          {mode === "gemini" ? (
            <>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-md max-w-[80%] whitespace-pre-line ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-100 text-blue-800"
                      : "mr-auto bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </>
          ) : (
            <>
              {results.length > 0 ? (
                results.map((item, idx) => (
                  <div key={idx} className="border-b pb-2 text-sm">
                    <a
                      href={item.link || item.url}
                      target="_blank"
                      className="text-blue-700 font-semibold hover:underline"
                    >
                      {item.title || item.name}
                    </a>
                    <p className="text-gray-700">
                      {item.snippet || item.description}
                    </p>
                  </div>
                ))
              ) : (
                !loading && <p className="text-gray-500">لا توجد نتائج حالياً.</p>
              )}
            </>
          )}

          {loading && <p className="text-gray-500">🔄 جاري التحميل...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* حقل الإدخال */}
        <div className="flex mt-4 space-x-2 rtl:space-x-reverse">
          <Input
            className="flex-1"
            placeholder="اكتب سؤالك هنا..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <Button onClick={handleSend} disabled={loading}>
            {loading ? "جاري..." : "إرسال"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

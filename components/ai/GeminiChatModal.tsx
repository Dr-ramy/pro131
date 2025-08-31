"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useGeminiChat, Message } from "@/hooks/useGeminiChat";

type GeminiChatModalProps = {
  trigger: React.ReactNode;
};

type Level = "expert" | "advanced" | "student" | "beginner";

export default function GeminiChatModal({ trigger }: GeminiChatModalProps) {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<Level>("student");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { sendMessage } = useGeminiChat();

  const getSystemPrompt = useCallback((level: Level): Message => {
    const base =
      "أنت مساعد ذكي. أجب باختصار وبدقة عن الأسئلة المتعلقة التمكين الرقمي فقط.";
    switch (level) {
      case "expert":
        return {
          sender: "system",
          text: `${base} افترض أن المستخدم خبير، قدّم معلومات دقيقة ومتقدمة.`,
        };
      case "advanced":
        return {
          sender: "system",
          text: `${base} افترض أن المستخدم متقدم، قدم معلومات تحليلية وتفصيلية.`,
        };
      case "student":
        return {
          sender: "system",
          text: `${base} افترض أن المستخدم طالب، وشرح له بشكل واضح ومبسط.`,
        };
      case "beginner":
        return {
          sender: "system",
          text: `${base} افترض أن المستخدم مبتدئ، وشرح له بطريقة سهلة جداً وبأمثلة.`,
        };
    }
  }, []);

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");

    const newUserMessage: Message = { sender: "user", text: trimmed };
    const systemPrompt = getSystemPrompt(level);
    const newMessages = [systemPrompt, ...messages, newUserMessage];

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    try {
      const reply = await sendMessage(newMessages);
      const aiMessage: Message = {
        sender: "ai",
        text: reply ?? "❌ تعذر الحصول على رد من المساعد.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setError("حدث خطأ أثناء التواصل مع Gemini.");
    } finally {
      setLoading(false);
    }
  }, [input, level, messages, sendMessage, getSystemPrompt]);

  // تحديث الإجابة عند تغيير المستوى
  useEffect(() => {
    const lastUserMessage = [...messages]
      .reverse()
      .find((msg) => msg.sender === "user");

    if (!lastUserMessage) return;

    const updateAnswer = async () => {
      setLoading(true);
      const systemPrompt = getSystemPrompt(level);
      try {
        const newMessages = [
          systemPrompt,
          ...messages.filter((m) => m.sender !== "ai"),
        ];
        const reply = await sendMessage(newMessages);
        const aiMessage: Message = {
          sender: "ai",
          text: reply ?? "❌ تعذر الحصول على رد جديد بعد تغيير المستوى.",
        };
        setMessages((prev) => [...prev, aiMessage]);

        const noticeMessage: Message = {
          sender: "system",
          text: "✅ تم تحديث الإجابة حسب المستوى الجديد.",
        };
        setMessages((prev) => [...prev, noticeMessage]);

        setTimeout(() => {
          setMessages((prev) => prev.filter((msg) => msg !== noticeMessage));
        }, 5000);
      } catch (err) {
        console.error("Update level error:", err);
        setError("❌ فشل تحديث الإجابة بعد تغيير المستوى.");
      } finally {
        setLoading(false);
      }
    };

    updateAnswer();
  }, [level, messages, sendMessage, getSystemPrompt]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-right">💡 التمكين الرقمي</DialogTitle>
        </DialogHeader>

        {/* أدوات التحكم */}
        <div className="flex justify-end items-center gap-4 mb-2 flex-wrap">
          <Select value={level} onValueChange={(val: Level) => setLevel(val)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="اختر المستوى" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="expert">خبير</SelectItem>
              <SelectItem value="advanced">متقدم</SelectItem>
              <SelectItem value="student">طالب</SelectItem>
              <SelectItem value="beginner">مبتدئ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* عرض الردود */}
        <div className="flex-1 overflow-y-auto border p-4 rounded-lg space-y-2 text-right bg-muted">
          {messages.length > 0 ? (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[80%] whitespace-pre-line ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-blue-800"
                    : msg.sender === "system"
                    ? "mx-auto text-green-700 bg-green-100"
                    : "mr-auto bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))
          ) : (
            !loading && <p className="text-gray-500">لا توجد محادثات حالياً.</p>
          )}
          {loading && <p className="text-gray-500">🔄 جاري التحميل...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* الإدخال */}
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

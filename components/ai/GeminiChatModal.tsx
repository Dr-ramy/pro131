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
import { useGeminiChat, Message } from "@/hooks/useGeminiChat"; // تأكد من تصدير Message من الهوك

type GeminiChatModalProps = {
  trigger: React.ReactNode;
};

export default function GeminiChatModal({ trigger }: GeminiChatModalProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const { sendMessage, loading, error } = useGeminiChat();

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newUserMessage: Message = { sender: "user", text: trimmed };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setInput("");

    const reply = await sendMessage(newMessages);

    const aiMessage: Message = {
      sender: "ai",
      text: reply ?? "❌ تعذر الحصول على رد من المساعد.",
    };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90vw] max-w-2xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-right">💡 المساعد الآلي</DialogTitle>
        </DialogHeader>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto border p-4 rounded-lg space-y-2 text-right bg-muted">
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
          {loading && (
            <div className="mr-auto text-sm text-gray-500">المساعد يكتب...</div>
          )}
          {error && (
            <div className="mr-auto text-sm text-red-500">⚠️ {error}</div>
          )}
        </div>

        {/* Input */}
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

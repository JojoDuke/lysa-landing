"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Home, MessageCircle, CheckCheck } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "lysa";
  text: string;
  delay: number;
}

const conversation: Message[] = [
  {
    id: 1,
    sender: "user",
    text: "Hi, I'm looking for a 3-bed in Scottsdale",
    delay: 0.4,
  },
  {
    id: 2,
    sender: "lysa",
    text: "Welcome! I'd love to help. What's your budget range?",
    delay: 1.2,
  },
  {
    id: 3,
    sender: "user",
    text: "Around $650k to $700k",
    delay: 2.0,
  },
  {
    id: 4,
    sender: "lysa",
    text: "Perfect. I found 2 properties that match. Would you like to book a showing?",
    delay: 2.8,
  },
  {
    id: 5,
    sender: "user",
    text: "Yes, Saturday morning works",
    delay: 3.6,
  },
  {
    id: 6,
    sender: "lysa",
    text: "Showing confirmed for Sat 10:30 AM",
    delay: 4.4,
  },
];

const initialVisible = [1, 2, 3];

function ChatBubble({
  msg,
}: {
  msg: Message;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
          msg.sender === "user"
            ? "rounded-tr-sm bg-green-700 text-white"
            : "rounded-tl-sm border border-neutral-200 bg-white text-green-850"
        }`}
      >
        {msg.text}
        {msg.sender === "lysa" && msg.id === 6 && (
          <CheckCheck className="ml-1 inline h-3.5 w-3.5 text-green-400" />
        )}
      </div>
    </motion.div>
  );
}

function ChatPreview() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>(initialVisible);
  const [typing, setTyping] = useState(false);
  const [cycle, setCycle] = useState(0);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleMessages(initialVisible);
    setTyping(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    conversation.forEach((msg) => {
      if (msg.id <= 3) return;

      if (msg.sender === "lysa") {
        timers.push(
          setTimeout(() => setTyping(true), msg.delay * 1000 - 600)
        );
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) =>
            prev.includes(msg.id) ? prev : [...prev, msg.id]
          );
        }, msg.delay * 1000)
      );
    });

    timers.push(setTimeout(() => setCycle((c) => c + 1), 8000));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visibleMessages, typing]);

  return (
    <div className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="flex shrink-0 items-center gap-3 border-b border-neutral-200 bg-[#f8f8f8] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400/10">
          <span className="text-sm font-bold text-green-400">L</span>
        </div>
        <div>
          <p className="text-sm font-medium text-green-850">Lysa</p>
          <p className="text-xs text-green-400">Online</p>
        </div>
      </div>

      <div
        ref={messagesRef}
        className="min-h-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden bg-[#fafafa] p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-neutral-200 bg-white px-3.5 py-2 text-sm leading-relaxed text-green-850">
            Hi! I&apos;m Lysa. Tell me what you&apos;re looking for and I&apos;ll
            help right away.
          </div>
        </div>

        {conversation.map((msg) =>
          visibleMessages.includes(msg.id) ? (
            <ChatBubble key={msg.id} msg={msg} />
          ) : null
        )}

        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-sm border border-neutral-200 bg-white px-4 py-3">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-neutral-300"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <section id="demo" className="border-b border-neutral-200 bg-surface">
      <div className="mx-auto max-w-container px-[6vw] py-16 lg:py-20">
        <div className="overflow-hidden rounded-[1.25rem] border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
            </div>
            <div className="mx-auto rounded-md bg-[#f8f8f8] px-4 py-1 text-xs text-body">
              app.textlysa.com
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-[#d1fae5] via-[#a7f3d0] to-[#6ee7b7] p-8 lg:min-h-[420px]">
              <div className="absolute inset-0 opacity-30 rucoria-dots" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-fit rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-green-850">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">New lead qualified</span>
                    </div>
                    <p className="mt-1 text-xs text-body">Buyer · $650k budget · Hot</p>
                  </div>
                  <div className="ml-8 w-fit rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-green-850">
                      <Home className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">2 properties matched</span>
                    </div>
                    <p className="mt-1 text-xs text-body">Scottsdale · 3 bed</p>
                  </div>
                  <div className="w-fit rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-green-850">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Showing booked</span>
                    </div>
                    <p className="mt-1 text-xs text-body">Sat 10:30 AM confirmed</p>
                  </div>
                </div>

                <div>
                  <p className="font-display text-2xl font-medium text-green-850">
                    Every conversation, handled.
                  </p>
                  <p className="mt-2 max-w-sm text-sm text-body">
                    Lysa keeps buyers engaged from first message to booked showing.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-200 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <ChatPreview />
            </div>
          </div>
        </div>

        <div
          className="mt-0 h-24 border-x border-b border-neutral-200 bg-[repeating-linear-gradient(135deg,#f1efef_0,#f1efef_1px,transparent_1px,transparent_12px)]"
          aria-hidden
        />
      </div>
    </section>
  );
}

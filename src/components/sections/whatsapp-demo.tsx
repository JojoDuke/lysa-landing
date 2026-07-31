"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, RotateCcw, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "@/lib/motion";

interface DemoMessage {
  id: string;
  sender: "user" | "lysa";
  text: string;
}

const demoScenarios: Record<string, { userMessage: string; lysaResponse: string }> = {
  qualify: {
    userMessage: "I'm interested in buying a property",
    lysaResponse:
      "Great to hear! I'd love to help you find the perfect home. Are you looking to buy or sell? And what's your approximate budget?",
  },
  search: {
    userMessage: "Show me 3-bedroom homes in Scottsdale under $700k",
    lysaResponse:
      "I found 3 properties matching your criteria:\n\n🏠 1420 Desert View Dr — $685,000\n🏠 892 Camelback Ln — $695,000\n🏠 1560 Scottsdale Rd — $670,000\n\nWould you like photos or to book a showing?",
  },
  book: {
    userMessage: "Can I book a showing for Saturday?",
    lysaResponse:
      "Absolutely! I have these slots available this Saturday:\n\n• 10:00 AM\n• 11:30 AM\n• 2:00 PM\n\nWhich works best for you?",
  },
  faq: {
    userMessage: "What are your brokerage fees?",
    lysaResponse:
      "Our standard listing commission is 2.5% of the final sale price, with no upfront costs. For buyers, our services are completely free. Would you like more details about our process?",
  },
};

const quickReplies = [
  { key: "qualify", label: "Qualify a lead" },
  { key: "search", label: "Search properties" },
  { key: "book", label: "Book a showing" },
  { key: "faq", label: "Ask about fees" },
];

export function WhatsAppDemo() {
  const [messages, setMessages] = useState<DemoMessage[]>([
    {
      id: "welcome",
      sender: "lysa",
      text: "Hi! I'm Lysa, your AI real estate assistant. Try one of the quick actions below to see me in action. 👋",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleScenario = useCallback((key: string) => {
    const scenario = demoScenarios[key];
    if (!scenario) return;

    const userMsg: DemoMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: scenario.userMessage,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `lysa-${Date.now()}`,
          sender: "lysa",
          text: scenario.lysaResponse,
        },
      ]);
    }, 1200);
  }, []);

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "lysa",
        text: "Hi! I'm Lysa, your AI real estate assistant. Try one of the quick actions below to see me in action. 👋",
      },
    ]);
    setIsTyping(false);
  };

  return (
    <MotionSection id="demo" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Interactive Demo"
          title="See Lysa in action"
          description="Experience how Lysa handles real conversations — qualify leads, search properties, and book showings instantly."
        />

        <div className="mx-auto max-w-lg">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-emerald-500/20 to-transparent blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111B21] shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between bg-[#1F2C34] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Lysa Demo</p>
                    <p className="text-xs text-emerald-400">Interactive Preview</p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="rounded-lg p-2 text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="space-y-3 p-4 min-h-[360px] max-h-[360px] overflow-y-auto bg-[#0b1419]">
                <AnimatePresence mode="popLayout">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                          msg.sender === "user"
                            ? "rounded-tr-sm bg-[#005C4B] text-white"
                            : "rounded-tl-sm bg-[#1F2C34] text-white/90"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-2xl rounded-tl-sm bg-[#1F2C34] px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="h-2 w-2 rounded-full bg-emerald-400/60"
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
                  </motion.div>
                )}
              </div>

              {/* Quick replies */}
              <div className="border-t border-white/[0.06] bg-[#1F2C34] p-4">
                <p className="mb-3 text-xs text-white/30 uppercase tracking-wider">
                  Try an action
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.key}
                      onClick={() => handleScenario(reply.key)}
                      disabled={isTyping}
                      className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs text-emerald-400 transition-all hover:bg-emerald-500/15 hover:border-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#0b1419] px-4 py-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    disabled
                    className="flex-1 bg-transparent text-sm text-white/30 placeholder:text-white/20 outline-none cursor-not-allowed"
                  />
                  <Send className="h-4 w-4 text-white/20" />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-white/30">
            This is a simulated preview. Book a demo to see Lysa with your brokerage&apos;s data.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}

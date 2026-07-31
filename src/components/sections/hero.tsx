"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow, GridPattern } from "@/components/ui/glow";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface Message {
  id: number;
  sender: "user" | "lysa";
  text: string;
  delay: number;
}

const conversation: Message[] = [
  { id: 1, sender: "user", text: "Hi, I'm looking for a 3-bed in Scottsdale", delay: 0.8 },
  { id: 2, sender: "lysa", text: "Welcome! I'd love to help. What's your budget range?", delay: 1.6 },
  { id: 3, sender: "user", text: "Around $650k–$700k", delay: 2.4 },
  { id: 4, sender: "lysa", text: "Perfect. I found 2 properties that match. Would you like to book a showing?", delay: 3.2 },
  { id: 5, sender: "user", text: "Yes, Saturday morning works", delay: 4.0 },
  { id: 6, sender: "lysa", text: "Showing confirmed for Sat 10:30 AM ✓", delay: 4.8 },
];

function WhatsAppMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setVisibleMessages([]);
    setTyping(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    conversation.forEach((msg) => {
      if (msg.sender === "lysa") {
        timers.push(
          setTimeout(() => setTyping(true), msg.delay * 1000 - 600)
        );
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
        }, msg.delay * 1000)
      );
    });

    timers.push(
      setTimeout(() => setCycle((c) => c + 1), 9000)
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <motion.div
      variants={fadeInUp}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111B21] shadow-2xl shadow-black/50">
        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#1F2C34] px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
            <span className="text-sm font-bold text-emerald-400">L</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Lysa</p>
            <p className="text-xs text-emerald-400">Online</p>
          </div>
        </div>

        {/* Chat area */}
        <div className="space-y-3 bg-[#0b1419] p-4 min-h-[320px]">
          {conversation.map((msg) =>
            visibleMessages.includes(msg.id) ? (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "rounded-tr-sm bg-[#005C4B] text-white"
                      : "rounded-tl-sm bg-[#1F2C34] text-white/90"
                  }`}
                >
                  {msg.text}
                  {msg.sender === "lysa" && msg.id === 6 && (
                    <CheckCheck className="inline ml-1 h-3.5 w-3.5 text-emerald-400" />
                  )}
                </div>
              </motion.div>
            ) : null
          )}

          {typing && (
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
                      className="h-2 w-2 rounded-full bg-white/40"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <Glow className="top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px]" />
      <GridPattern />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI Real Estate Employee
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Meet{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                Lysa.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/50 sm:text-xl max-w-xl mx-auto lg:mx-0"
            >
              The AI employee that qualifies leads, recommends properties, and
              books showings 24/7 on WhatsApp.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10">
              <Button asChild size="lg">
                <Link href="#cta">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

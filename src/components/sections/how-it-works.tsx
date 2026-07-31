"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "@/lib/motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Book a demo",
    description:
      "Tell us about your brokerage, listings, and how you currently handle WhatsApp inquiries.",
  },
  {
    step: "02",
    icon: Settings,
    title: "We configure Lysa",
    description:
      "We set up WhatsApp, upload your knowledge base, connect your listings, and configure your workflows.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Go live",
    description:
      "Lysa starts handling conversations immediately. You receive qualified leads and booked showings from day one.",
  },
];

export function HowItWorks() {
  return (
    <MotionSection id="how-it-works" className="relative py-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Deploy Lysa in three steps"
          description="Deploying AI should feel as simple as hiring a new employee."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Connection line */}
          <div className="absolute top-16 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent md:block" />

          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
                <item.icon className="h-7 w-7 text-emerald-400" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-emerald-400/60">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/40 max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}

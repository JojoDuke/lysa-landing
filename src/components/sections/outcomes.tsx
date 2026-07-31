"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Filter,
  CalendarCheck,
  Heart,
  Briefcase,
  TrendingUp,
  Bot,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "@/lib/motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const outcomes = [
  {
    icon: Clock,
    title: "Faster response times",
    description: "Reply in seconds, not hours. Every lead gets an instant response.",
  },
  {
    icon: Filter,
    title: "More qualified leads",
    description: "Every inquiry is scored and structured before it reaches you.",
  },
  {
    icon: CalendarCheck,
    title: "More booked showings",
    description: "Convert interest into confirmed appointments automatically.",
  },
  {
    icon: Heart,
    title: "Better customer experience",
    description: "Professional, consistent conversations that build trust.",
  },
  {
    icon: Briefcase,
    title: "Less administrative work",
    description: "Stop answering the same questions. Focus on selling.",
  },
  {
    icon: TrendingUp,
    title: "Higher conversion rates",
    description: "Qualified leads convert faster when nurtured instantly.",
  },
  {
    icon: Bot,
    title: "AI available 24/7",
    description: "Never miss a lead — weekends, evenings, and holidays included.",
  },
];

export function Outcomes() {
  return (
    <MotionSection id="outcomes" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Outcomes"
          title="Results that matter to your brokerage"
          description="Lysa doesn't sell features — it delivers measurable outcomes from day one."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              variants={fadeInUp}
              className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.04] ${
                index === outcomes.length - 1
                  ? "sm:col-span-2 lg:col-span-1 xl:col-span-1"
                  : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 transition-colors group-hover:bg-emerald-500/20">
                <outcome.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-medium text-white">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}

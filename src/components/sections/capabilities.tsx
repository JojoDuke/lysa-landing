"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  BookOpen,
  Search,
  Calendar,
  Brain,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { MotionSection } from "@/lib/motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const capabilities = [
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description:
      "Welcome inquiries, detect buyer or seller intent, ask qualifying questions naturally, and hand structured leads to your team with a Hot/Warm/Cold score.",
    tags: ["Name & Contact", "Budget", "Timeline", "Lead Score"],
  },
  {
    icon: BookOpen,
    title: "Knowledge Agent",
    description:
      "Answer brokerage FAQs, buying and selling processes, fees, and property questions using your PDFs, website, and internal documents.",
    tags: ["Agency FAQs", "Process Guides", "Source-backed"],
  },
  {
    icon: Search,
    title: "Property Discovery",
    description:
      "Understand buyer requirements, search your listings, recommend matching properties with images, and refine suggestions in real time.",
    tags: ["Smart Search", "Images", "Recommendations"],
  },
  {
    icon: Calendar,
    title: "Showing Booking",
    description:
      "Check availability, offer showing slots, confirm appointments, send reminders, and notify your agents via Google Calendar or Calendly.",
    tags: ["Calendar Sync", "Reminders", "Confirmations"],
  },
  {
    icon: Brain,
    title: "Conversation Memory",
    description:
      "Remember customers between conversations. Pick up where you left off with personalized follow-ups based on past preferences.",
    tags: ["History", "Preferences", "Personalisation"],
  },
];

export function Capabilities() {
  return (
    <MotionSection id="capabilities" className="relative py-24 lg:py-32 bg-white/[0.01]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Capabilities"
          title="Five agents. One AI employee."
          description="Lysa combines specialised agents that work together seamlessly inside WhatsApp."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 ${
                index === capabilities.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl transition-all group-hover:bg-emerald-500/10" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <cap.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {cap.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}

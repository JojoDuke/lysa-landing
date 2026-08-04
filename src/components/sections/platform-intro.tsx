"use client";

import {
  Calendar,
  MessageSquare,
  FileText,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const workflowItems = [
  {
    icon: MessageSquare,
    label: "Lead inquiry",
    detail: "New WhatsApp message",
    position: "left-[8%] top-[18%]",
  },
  {
    icon: ClipboardList,
    label: "Qualification",
    detail: "Budget, timeline, intent",
    position: "left-[38%] top-[8%]",
  },
  {
    icon: FileText,
    label: "Property match",
    detail: "2 listings recommended",
    position: "right-[12%] top-[22%]",
  },
  {
    icon: Calendar,
    label: "Showing booked",
    detail: "Sat 10:30 AM confirmed",
    position: "left-[52%] top-[58%]",
  },
];

function WorkflowCard({
  item,
}: {
  item: (typeof workflowItems)[number];
}) {
  return (
    <>
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white">
        <item.icon className="h-4 w-4 text-green-850" />
      </div>
      <p className="text-sm font-semibold text-green-850">{item.label}</p>
      <p className="mt-1 text-xs text-body">{item.detail}</p>
    </>
  );
}

export function PlatformIntro() {
  return (
    <section id="platform" className="bg-green-800 pb-0 pt-12 sm:pt-16 lg:pt-24">
      <div className="mx-auto max-w-container px-0 sm:px-[4vw] lg:px-[6vw]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="overflow-hidden rounded-t-[1.5rem] bg-white px-5 py-12 text-center sm:rounded-t-[2rem] sm:px-8 sm:py-16 lg:rounded-t-[3rem] lg:px-16 lg:py-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-[clamp(1.75rem,6vw,3.375rem)] font-medium leading-tight text-green-850"
          >
            From first message to booked showing.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-base text-body sm:text-lg"
          >
            You sell homes. We handle the conversations.
          </motion.p>

          {/* Mobile: stacked 2-col grid */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 grid grid-cols-2 gap-3 text-left md:hidden"
          >
            {workflowItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-neutral-200 bg-[#f0fdf9] p-3 shadow-sm sm:p-4"
              >
                <WorkflowCard item={item} />
              </div>
            ))}
          </motion.div>

          {/* Desktop: absolute scatter layout */}
          <motion.div
            variants={fadeInUp}
            className="relative mx-auto mt-16 hidden max-w-4xl md:block"
          >
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-neutral-200" />

            <div className="relative min-h-[320px]">
              {workflowItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  custom={i}
                  className={`absolute ${item.position} w-44 rounded-xl border border-neutral-200 bg-[#f0fdf9] p-4 text-left shadow-sm`}
                >
                  <WorkflowCard item={item} />
                </motion.div>
              ))}

              <motion.div
                variants={fadeInUp}
                className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose"
              >
                <div className="h-2 w-2 rounded-full bg-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

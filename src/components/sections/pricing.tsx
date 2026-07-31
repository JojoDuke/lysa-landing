"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MotionSection } from "@/lib/motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const plans = [
  {
    name: "Deployment",
    price: "$450",
    period: "one-time",
    description: "Everything needed to get Lysa live in your brokerage.",
    features: [
      "Configuration & setup",
      "WhatsApp integration",
      "Knowledge base upload",
      "Full deployment",
      "Testing & go-live",
    ],
    highlighted: false,
  },
  {
    name: "Lysa",
    price: "$79",
    period: "/month",
    description: "Ongoing hosting, maintenance, and support for your AI employee.",
    features: [
      "Hosted infrastructure",
      "AI usage included",
      "Continuous maintenance",
      "24/7 monitoring",
      "Regular updates",
      "Priority support",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <MotionSection id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Pricing"
          title="Simple, transparent pricing"
          description="One deployment fee to get started. One monthly fee to keep Lysa running."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeInUp}>
              <Card
                className={`relative h-full overflow-hidden transition-all duration-500 hover:shadow-xl ${
                  plan.highlighted
                    ? "border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                    : "hover:border-white/15"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                )}

                <CardHeader className="pb-4">
                  {plan.highlighted && (
                    <span className="mb-3 inline-flex w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      Most Popular
                    </span>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-semibold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/40">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-sm text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "secondary"}
                    className="mt-8 w-full"
                  >
                    <Link href="#cta">
                      Book a Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}

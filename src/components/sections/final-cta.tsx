"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to hire your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              AI employee?
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Join brokerages across America that never miss a lead. Book a demo and see Lysa
            qualify leads, recommend properties, and book showings — live.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:hello@lysa.ai?subject=Book%20a%20Demo">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/30">
            No commitment required. See Lysa in action with your brokerage&apos;s use case.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

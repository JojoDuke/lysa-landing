import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BOOK_DEMO_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

function RevealLine({
  children,
  delayClass = "",
}: {
  children: React.ReactNode;
  delayClass?: string;
}) {
  return (
    <span className="hero-reveal">
      <span className={`hero-reveal-inner ${delayClass}`.trim()}>{children}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="rucoria-grid border-b border-neutral-200">
      <div className="mx-auto max-w-container px-[6vw] pb-16 pt-20 text-center lg:pb-24 lg:pt-28">
        <h1 className="font-display text-[clamp(2.75rem,7vw,5.875rem)] font-medium leading-[1.02] tracking-tight text-green-850">
          <RevealLine>Meet Lysa, your AI</RevealLine>
          <RevealLine delayClass="hero-reveal-inner-delay-1">
            real estate{" "}
            <span className="text-green-400">employee.</span>
          </RevealLine>
        </h1>

        <span className="hero-reveal mx-auto mt-8 block max-w-2xl">
          <span className="hero-reveal-inner hero-reveal-inner-delay-2 text-lg leading-relaxed text-body sm:text-xl">
            Qualifies leads, recommends properties, and books showings for your
            brokerage 24/7 on WhatsApp.
          </span>
        </span>

        <div className="hero-reveal mt-10">
          <div className="hero-reveal-inner hero-reveal-inner-delay-3">
            <Button asChild size="lg">
              <Link href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer">
                Book a demo
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

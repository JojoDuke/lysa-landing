import { ChevronRight } from "lucide-react";
import { BookDemoLink } from "@/components/analytics/book-demo-link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="cta" className="bg-surface pb-0 pt-16 lg:pt-24">
      <div className="mx-auto max-w-container px-[6vw]">
        <div className="overflow-hidden rounded-t-[2rem] border border-b-0 border-neutral-200 bg-white px-6 py-16 text-center lg:rounded-t-[3rem] lg:px-16 lg:py-20">
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Make every lead your{" "}
            <span className="text-green-400">best lead.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-body">
            Improve lead response, conversion, and customer satisfaction with
            Lysa on WhatsApp.
          </p>

          <div className="mt-10">
            <Button asChild size="lg">
              <BookDemoLink location="final_cta">
                Book a demo
                <ChevronRight className="h-4 w-4" />
              </BookDemoLink>
            </Button>
          </div>

          <p className="mt-6 text-sm text-body/70">
            No commitment required. See Lysa in action with your brokerage&apos;s
            use case.
          </p>
        </div>
      </div>
    </section>
  );
}

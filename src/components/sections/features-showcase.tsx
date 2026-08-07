import { ChevronRight } from "lucide-react";
import { BookDemoLink } from "@/components/analytics/book-demo-link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Lead Qualification Tools",
    description:
      "Welcome inquiries, detect buyer or seller intent, and hand structured leads to your team with a Hot/Warm/Cold score.",
    gradient: "from-[#d1fae5] to-[#6ee7b7]",
  },
  {
    title: "Property Discovery",
    description:
      "Understand buyer requirements, search your listings, and recommend matching properties with images in real time.",
    gradient: "from-[#fce7f3] to-[#f9a8d4]",
  },
  {
    title: "Showing Booking",
    description:
      "Check availability, offer showing slots, confirm appointments, and notify your agents automatically.",
    gradient: "from-[#ecfdf5] to-[#a7f3d0]",
  },
  {
    title: "Knowledge Agent",
    description:
      "Answer brokerage FAQs, buying and selling processes, and property questions using your documents.",
    gradient: "from-[#fdf2f8] to-[#fbcfe8]",
  },
  {
    title: "Property Valuation Agent",
    description:
      "Pulls comps, neighborhood trends, and market data to generate accurate valuations in under 5 minutes, not 30 to 60.",
    gradient: "from-[#d1fae5] to-[#34d399]",
  },
  {
    title: "Document Processing Agent",
    description:
      "Extracts key terms, dates, and conditions from agreements and disclosures. Flags gaps and unusual clauses for review.",
    gradient: "from-[#fce7f3] to-[#f9a8d4]",
  },
  {
    title: "Market Analysis Agent",
    description:
      "Builds on-demand reports on price trends, days on market, inventory, and neighborhood comparisons from MLS and public data.",
    gradient: "from-[#ecfdf5] to-[#6ee7b7]",
  },
  {
    title: "Tenant Communication Agent",
    description:
      "Handles maintenance requests, lease questions, and payment reminders through your property management system, escalating when needed.",
    gradient: "from-[#fdf2f8] to-[#fbcfe8]",
  },
  {
    title: "Maintenance Prediction Agent",
    description:
      "Monitors HVAC, water usage, and equipment patterns to predict service needs before breakdowns and costly emergency repairs.",
    gradient: "from-[#fce7f3] to-[#e8488a]",
  },
];

export function FeaturesShowcase() {
  return (
    <section id="features" className="border-b border-neutral-200 bg-surface">
      <div className="mx-auto max-w-container px-[6vw] py-16 lg:py-24">
        <div className="mb-12">
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Everything Real Estate and even more
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${feature.gradient}`}
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-green-850">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-green-850 p-8 text-white md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-display text-xl font-medium">
                Real Estate Collaboration Software
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-green-75">
                Reduce the follow-ups, headaches, and hassle with an intuitive
                AI employee on WhatsApp. Spend less time answering the same
                questions and more time closing deals.
              </p>
            </div>
            <Button asChild variant="inverse" className="mt-8 w-fit">
              <BookDemoLink location="features">
                Book a demo
                <ChevronRight className="h-4 w-4" />
              </BookDemoLink>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}

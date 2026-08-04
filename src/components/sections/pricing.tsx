import Link from "next/link";
import { Check } from "lucide-react";
import { BOOK_DEMO_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Deployment",
    price: "$449",
    period: "one-time",
    features: [
      "Configuration & setup",
      "WhatsApp integration",
      "Knowledge base upload",
      "Full deployment",
      "Testing & go-live",
    ],
  },
  {
    name: "Lysa",
    price: "$79",
    period: "/month",
    features: [
      "Hosted infrastructure",
      "AI usage included",
      "Continuous maintenance",
      "24/7 monitoring",
      "Regular updates",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-container px-[6vw] py-16 lg:py-24">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-rose">
            Pricing
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            One deployment fee to get started. One monthly fee to keep Lysa
            running.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle className="font-display text-green-850">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="font-display text-5xl font-medium text-green-850">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-body">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                      <span className="text-sm text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full">
                  <Link href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

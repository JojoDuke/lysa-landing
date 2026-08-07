import { Check } from "lucide-react";
import { BookDemoLink } from "@/components/analytics/book-demo-link";
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
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            One deployment fee to get started. One monthly fee to keep Lysa
            running.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex h-full flex-col">
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
              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                      <span className="text-sm text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full">
                    <BookDemoLink location="pricing">Book a Demo</BookDemoLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

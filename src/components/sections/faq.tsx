"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does deployment take?",
    answer:
      "Most agencies go live within 7 days. This includes WhatsApp setup, knowledge base configuration, listing integration, testing, and your go-live review.",
  },
  {
    question: "What platforms does Lysa support?",
    answer:
      "WhatsApp is the primary channel today. Lysa can also be extended to Instagram, Facebook Messenger, SMS, and email if you want.",
  },
  {
    question: "Do we need technical knowledge?",
    answer:
      "Not at all. We handle the entire setup, including WhatsApp configuration, knowledge upload, deployment, and testing. You just need to provide your brokerage information and listings.",
  },
  {
    question: "Does Lysa integrate with our CRM?",
    answer:
      "Optional add-ons include GoHighLevel and HubSpot. The base product includes exportable structured lead data.",
  },
  {
    question: "What happens after we book a demo?",
    answer:
      "We'll walk you through Lysa live, discuss your brokerage's needs, and provide a tailored deployment plan. There's no obligation. It's a chance to see if Lysa is the right fit.",
  },
  {
    question: "Is there a contract or minimum term?",
    answer:
      "Lysa is $79/month on a month-to-month basis, plus a one-time $449 deployment fee.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-neutral-200 bg-surface">
      <div className="mx-auto max-w-container px-[6vw] py-16 lg:py-24">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-rose">
            FAQ
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.375rem)] font-medium leading-tight text-green-850">
            Common questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Everything you need to know about deploying Lysa in your brokerage.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white px-6"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-green-850">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

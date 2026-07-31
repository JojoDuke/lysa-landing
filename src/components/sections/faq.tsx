"use client";

import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionSection } from "@/lib/motion";

const faqs = [
  {
    question: "Is Lysa a chatbot?",
    answer:
      "No. Lysa is positioned as an AI employee — a deployable software product that is configured for your brokerage and continuously maintained. It's not a DIY chatbot builder or a one-off custom project.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Most agencies go live within 1–2 weeks. This includes WhatsApp setup, knowledge base configuration, listing integration, testing, and your go-live review.",
  },
  {
    question: "What platforms does Lysa work on?",
    answer:
      "Lysa currently operates on WhatsApp, which is where a growing number of real estate inquiries happen in the US. Future channels include Instagram, Facebook Messenger, SMS, and email.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. We handle the entire setup — WhatsApp configuration, knowledge upload, deployment, and testing. You just need to provide your brokerage information and listings.",
  },
  {
    question: "Can Lysa integrate with my CRM?",
    answer:
      "CRM integrations (GoHighLevel, HubSpot, etc.) are available as optional add-ons. The base deployment includes lead qualification with structured data you can export manually.",
  },
  {
    question: "What happens after I book a demo?",
    answer:
      "We'll walk you through Lysa live, discuss your brokerage's needs, and provide a tailored deployment plan. There's no obligation — it's a chance to see if Lysa is the right fit.",
  },
  {
    question: "Is there a contract or minimum term?",
    answer:
      "The $79/month Lysa plan is month-to-month with no long-term contract. The $450 deployment fee is a one-time setup cost.",
  },
];

export function FAQ() {
  return (
    <MotionSection id="faq" className="relative py-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Common questions"
          description="Everything you need to know about deploying Lysa in your brokerage."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MotionSection>
  );
}

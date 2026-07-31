import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Capabilities } from "@/components/sections/capabilities";
import { WhatsAppDemo } from "@/components/sections/whatsapp-demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Outcomes />
      <Capabilities />
      <WhatsAppDemo />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

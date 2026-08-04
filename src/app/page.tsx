import { Hero } from "@/components/sections/hero";
import { ProductPreview } from "@/components/sections/product-preview";
import { PlatformIntro } from "@/components/sections/platform-intro";
import { FeaturesChaos } from "@/components/sections/features-chaos";
import { FeaturesShowcase } from "@/components/sections/features-showcase";
import { StatsSection } from "@/components/sections/stats-section";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductPreview />
      <PlatformIntro />
      <FeaturesChaos />
      <FeaturesShowcase />
      <StatsSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

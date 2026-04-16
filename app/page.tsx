import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import Insights from "@/components/home/Insights";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import ServiceSection from "@/components/home/ServiceSection";
import { StatsSection } from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import WorkProcessSection from "@/components/home/WorkProcessSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection/>
      <ServiceSection />
      <WhyUsSection/>
      <WorkProcessSection/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <CTASection/>
      <Insights/>
    </>
  );
}

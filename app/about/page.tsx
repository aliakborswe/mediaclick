import AboutHero from "@/components/about/AboutHero";
import ClosingCta from "@/components/about/ClosingCta";
import CompanyOverview from "@/components/about/CompanyOverview";
import OurTeam from "@/components/about/OurTeam";
import ValuesSection from "@/components/about/ValuesSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <ValuesSection />
      <OurTeam />
      <ClosingCta />
    </>
  );
}

import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import PortfolioGrid from "../shared/PortfolioGrid";
import { Button } from "../ui/button";
import SectionTitle from "../shared/SectionTitle";
import Wrapper from "../shared/Wrapper";
import { getProjects } from "@/lib/projects";

export async function PortfolioSection() {
  const projects = await getProjects();
  return (
    <section className='w-full bg-background'>
      <Wrapper>
        <SectionTitle
          bar
          centered
          subtitle='Recent Work'
          title='Our Portfolio'
          description="See how we've helped businesses transform their digital
            presence and achieve remarkable results."
          className='mb-16'
        />

        {/* Portfolio Grid */}
        <PortfolioGrid projects={projects} />

        {/* CTA */}
        <AnimatedSection
          variant='slideUp'
          delay={0.6}
          className='text-center mt-16'
        >
          <Link href='/portfolio'>
            <Button
              variant='default'
              className='py-5 text-primary-foreground'
            >
              View All Case Studies
            </Button>
          </Link>
        </AnimatedSection>
      </Wrapper>
    </section>
  );
}

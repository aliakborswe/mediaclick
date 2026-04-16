import HeroContent from "../shared/HeroContent";
import NextSection from "../shared/NextSection";
import Wrapper from "../shared/Wrapper";

export default function AboutHero() {
  return (
    <section className='relative h-auto min-h-125 pt-16 lg:pt-24 bg-background flex items-center justify-center overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl'></div>

      <Wrapper>
        <div className='text-center max-w-4xl mx-auto relative z-10'>
          <HeroContent
            title='Blending creativity with'
            cTitle='predictive intelligence'
            subTitle='Driven by Purpose. Powered by People.'
            description="At Media-Click, we don't just build software. We build trust,
            relationships, and solutions that make a difference. We're a
            forward-thinking technology company driven by purpose, powered by
            people, and focused on delivering scalable, sustainable, and smart
            digital products."
          />
        </div>
        <div className='w-full h-10 relative flex items-center justify-center'>
          <NextSection
            nextSectionId='#overview'
            className='absolute -bottom-6 z-20'
          />
        </div>
      </Wrapper>
    </section>
  );
}

import Wrapper from "../shared/Wrapper";
import NextSection from "../shared/NextSection";
import HeroContent from "../shared/HeroContent";

export default function CareersHero() {
  return (
    <section className='relative h-auto min-h-[50vh] bg-background pt-24 lg:pt-32 flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-linear-to-b from-primary/5 to-background z-0'></div>

      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>

      <Wrapper className='relative z-10 '>
        <div className='text-center max-w-4xl mx-auto'>
          <HeroContent
            title='Careers at'
            cTitle='Media-Clicking'
            subTitle='Join Our Team of Software Developers & Innovators'
            description="(Advanced Software and Technology Zone), we're more than just developers and designers. We are problem solvers, innovators, and digital builders shaping the future of technology."
            dStrong='Media-Clicking'
            prefix='At'
          />
          <div className='flex items-center justify-center mt-8'>
            <NextSection
              isIcon={false}
              nextSectionId='#open-positions'
              text='View Open Positions'
              className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-4 font-bold shadow-premium transition-all'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

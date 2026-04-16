import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import NextSection from "../shared/NextSection";
import Wrapper from "../shared/Wrapper";
import HeroContent from "../shared/HeroContent";

export function ServicesHero() {
  return (
    <div className='relative bg-background pt-24 lg:pt-32 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-linear-to-b from-primary/5 to-background z-0'></div>

      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>

      <Wrapper className='relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <HeroContent
            title='Complete'
            cTitle='Software Development'
            subTitle='End-to-End Solutions for Web, Mobile & Beyond'
            description='delivers scalable, high-performance solutions tailored to your business needs. We combine cutting-edge technology with industry expertise to build digital products that drive growth, efficiency, and innovation.'
            dStrong='- Media-Clicking'
            prefix='From full-stack web applications to cross-platform mobile apps, SEO optimization, and seamless maintenance'
          />

          <div className='flex flex-wrap justify-center gap-4'>
            <NextSection
              text='View Our Services'
              nextSectionId='#services'
              isIcon={false}
              className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-4 font-bold shadow-premium transition-all'
            />
            <Link href='/contact'>
              <Button
                variant='outline'
                size='lg'
                className='border-primary/20 hover:bg-primary/5 text-primary font-bold rounded-xl px-10 py-4 h-auto transition-all'
              >
                Start Your Project
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

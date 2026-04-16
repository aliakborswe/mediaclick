import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import NextSection from "../shared/NextSection";
import HeroContent from "../shared/HeroContent";

export default function ProjectHero() {
  return (
    <div className='relative bg-background overflow-hidden pt-24 lg:pt-32'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-linear-to-b from-primary/5 to-background z-0'></div>

      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50'></div>

      <Wrapper className='relative'>
        <div className='text-center max-w-4xl mx-auto'>
          <HeroContent
            title='Our'
            cTitle='Creative Portfolio'
            subTitle='Delivering Digital Excellence Since Day One'
            description='Explore our diverse portfolio of transformative software solutions. Each project reflects our technical expertise, innovative approach, and dedication to client success across global industries.'
            dStrong='- Media-Clicking Portfolio'
            prefix='From disruptive startups to enterprise solutions, witness the power of'
          />
          <div className='flex flex-wrap gap-4 justify-center mt-10'>
            <NextSection
              text='Explore Projects'
              nextSectionId='#portfolio'
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

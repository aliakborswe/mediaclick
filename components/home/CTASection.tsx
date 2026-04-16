"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "../shared/AnimatedSection";
import Wrapper from "../shared/Wrapper";

export function CTASection() {
  return (
    <section className='w-full bg-primary/5'>

      <div className='absolute inset-0 overflow-hidden opacity-10'>
        <div className='absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white blur-3xl' />
        <div className='absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white blur-3xl' />
      </div>

      <Wrapper>
        <AnimatedSection variant='slideUp' className='text-center space-y-6'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight text-foreground'>
            Ready to Transform Your Digital Presence?
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Join 150+ companies that have already achieved remarkable growth
            with our digital marketing strategies.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
            <Link href='/contact'>
              <Button
                size='lg'
                variant="default"
                className='px-8'
              >
                Get Free Quote Today
              </Button>
            </Link>
            <Link href='/about'>
              <Button
                size='lg'
                variant='secondary'
                className=' px-8'
              >
                Learn More About Us
              </Button>
            </Link>
          </div>

          <p className='text-sm text-foreground pt-4'>
            No credit card required. Free consultation included.
          </p>
        </AnimatedSection>
      </Wrapper>
    </section>
  );
}

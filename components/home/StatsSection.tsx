"use client";

import { AnimatedSection } from "../shared/AnimatedSection";
import { CountUp } from "../shared/CountUp";
import Wrapper from "../shared/Wrapper";


const STATS = [
  {
    end: 200,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    end: 150,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    end: 8,
    label: "Years of Experience",
  },
  {
    end: 5,
    suffix: "x",
    label: "Average ROI",
  },
];

export function StatsSection() {
  return (
    <section className='w-full bg-linear-to-b from-background to-primary/5'>
      <Wrapper>
        <AnimatedSection variant='slideUp' className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Our Results Speak for Themselves
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Data-driven strategies that deliver measurable impact for our
            clients across industries.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {STATS.map((stat, index) => (
            <AnimatedSection
              key={index}
              variant='slideUp'
              delay={index * 0.1}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                <CountUp
                  end={stat.end}
                  start={0}
                  duration={2.5}
                  suffix={stat.suffix}
                //   prefix={stat.prefix}
                />
              </div>
              <p className='text-foreground font-medium'>{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

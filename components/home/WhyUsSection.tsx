"use client";

import { Check } from "lucide-react";
import { AnimatedSection } from "../shared/AnimatedSection";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

const WHY_FEATURES = [
  {
    title: "Proven Track Record",
    description: "150+ satisfied clients with an average 98% retention rate",
  },
  {
    title: "Data-Driven Approach",
    description: "Every decision backed by analytics and market research",
  },
  {
    title: "Expert Team",
    description:
      "8+ years of experience across all digital marketing disciplines",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team available whenever you need us",
  },
];

export function WhyUsSection() {
  return (
    <section className='w-full bg-background'>
      <Wrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div>
            <AnimatedSection variant='slideRight'>
              <SectionTitle
                className='mb-8'
                bar
                subtitle='Why Choose Us'
                title='Partner With Industry Leaders'
                description="We're not just another digital marketing agency. We're
              your strategic partner committed to driving real growth and
              measurable results for your business."
              />

              <ul className='space-y-4'>
                {WHY_FEATURES.map((feature, index) => (
                  <AnimatedSection
                    key={index}
                    variant='slideUp'
                    delay={index * 0.05}
                  >
                    <li className='flex gap-3'>
                      <div className='shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1'>
                        <Check className='h-4 w-4 text-primary' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-foreground'>
                          {feature.title}
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Side - Visual */}
          <div>
            <AnimatedSection
              variant='slideLeft'
              className='relative'
            >
              <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 blur-3xl' />
              <video
                autoPlay
                loop
                muted
                playsInline
                className='block h-auto w-full max-h-[300px] lg:max-h-225 object-cover rounded-lg relative z-10'
              >
                <source src={"videos/media-clicking.mp4"} type='video/mp4' />
              </video>
            </AnimatedSection>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

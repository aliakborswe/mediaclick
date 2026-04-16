import Wrapper from "../shared/Wrapper";
import teamImage from "@/assets/images/Branding-Strategy.jpg";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import { Users } from "lucide-react";

interface Benefit {
  category: string;
  benefits: string[];
}

interface WhyWorkWithUsProps {
  benefits: Benefit[];
}

export default function WhyWorkWithUs({ benefits }: WhyWorkWithUsProps) {
  return (
    <section
      id='why-work-with-us'
      className='bg-linear-to-b from-background to-primary/5'
    >
      <Wrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <SectionTitle
              title='Why work with us?'
              barClass='mx-0'
              titleClass='bg-primary/10 text-primary'
              icon={<Users className='w-4 h-4' />}
            />
            <p className='text-muted-foreground leading-relaxed text-lg'>
              We believe in fostering a collaborative, inclusive, and
              growth-driven work environment where everyone thrives. Our
              projects are challenging, our standards are high, and our team is
              full of passionate people who love what they do.
            </p>

            {/* Benefits by Category */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
              {benefits.map((category) => (
                <div
                  key={category.category}
                  className='bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:shadow-premium'
                >
                  <h4 className='font-bold text-primary mb-3'>
                    {category.category}
                  </h4>
                  <ul className='space-y-2'>
                    {category.benefits
                      .slice(0, 3)
                      .map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className='text-sm text-muted-foreground flex items-center gap-2'
                        >
                          <div className='w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0'></div>
                          {benefit}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Team Collaboration Image */}
          <Image
            src={teamImage}
            alt='Media-Clicking Team'
            className='object-contain aspect-auto w-full h-full rounded-md'
            placeholder='blur'
            priority
          />
        </div>
      </Wrapper>
    </section>
  );
}

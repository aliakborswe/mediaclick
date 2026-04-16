import { Rocket, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

export default function CompanyOverview() {
  return (
    <section
      id='overview'
      className='bg-linear-to-b from-background to-primary/5'
    >
      <Wrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <SectionTitle
              bar
              subtitle='About Us'
              title='Who we are?'
              barClass='mx-0'
            />
            <p className='text-muted-foreground leading-relaxed text-lg'>
              <span className='font-bold text-primary'>MediaClicking</span> is a
              premier digital marketing and advertising agency that specializes
              in transforming brands and creating digital experiences that leave
              lasting impressions. Our approach integrates data analytics with
              innovative creative strategy. We map user journeys, predict
              trends, and deliver messaging that drives sustainable growth for
              our clients.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Card className='h-full bg-card border-border hover:border-primary/30 transition-all hover:shadow-premium p-0'>
                <CardContent className='p-6'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                    <Rocket className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    Our Mission
                  </h3>
                  <p className='text-muted-foreground'>
                    Empowering businesses with technology-driven, scalable
                    marketing solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className='h-full bg-card border-border hover:border-primary/30 transition-all hover:shadow-premium p-0'>
                <CardContent className='p-6'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                    <Target className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    Our Vision
                  </h3>
                  <p className='text-muted-foreground'>
                    To be the global catalyst for digital innovation and brand
                    elevation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Zap } from "lucide-react";
import type { Service } from "@/lib/services";
import Wrapper from "../shared/Wrapper";

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className='bg-background'>
      <Wrapper>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <Card className='border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-premium group rounded-3xl'>
            <CardHeader>
              <div className='w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-primary/10'>
                <CheckCircle className='h-7 w-7 text-primary' />
              </div>
              <CardTitle className='text-2xl font-bold text-foreground'>
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {service.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0'>
                      <CheckCircle className='h-4 w-4 text-primary' />
                    </div>
                    <span className='text-muted-foreground font-medium leading-relaxed'>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className='border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-premium group rounded-3xl'>
            <CardHeader>
              <div className='w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-primary/10'>
                <Zap className='h-7 w-7 text-primary' />
              </div>
              <CardTitle className='text-2xl font-bold text-foreground'>
                Delivery Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground leading-relaxed font-medium'>
                {service.delivery}
              </p>
            </CardContent>
          </Card>

          <Card className='border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-premium group rounded-3xl'>
            <CardHeader>
              <div className='w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-primary/10'>
                <Target className='h-7 w-7 text-primary' />
              </div>
              <CardTitle className='text-2xl font-bold text-foreground'>
                Why Choose Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground leading-relaxed font-medium'>
                {service.why_media_clicking}
              </p>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
}

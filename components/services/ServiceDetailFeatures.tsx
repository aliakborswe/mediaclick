import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Zap } from "lucide-react";
import type { Service } from "@/lib/services";
import Wrapper from "../shared/Wrapper";

interface ServiceDetailFeaturesProps {
  service: Service;
}

export function ServiceDetailFeatures({ service }: ServiceDetailFeaturesProps) {
  return (
    <section className='bg-linear-to-b from-background to-primary/5'>
      <Wrapper>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-3xl md:text-5xl font-extrabold text-foreground tracking-tight'>
            What&apos;s Included
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto font-medium'>
            Comprehensive features and technologies that power your{" "}
            <span className='text-primary'>{service.title.toLowerCase()}</span>
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <Card className='border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-premium group rounded-3xl'>
            <CardHeader>
              <div className='w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-primary/10'>
                <Layers className='h-7 w-7 text-primary' />
              </div>
              <CardTitle className='text-2xl font-bold text-foreground'>
                Core Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {service?.features.map((feature, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border group-hover:border-primary/20 transition-all'
                  >
                    <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0'>
                      <Zap className='h-3 w-3 text-primary' />
                    </div>
                    <span className='text-foreground text-sm font-semibold'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className='border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-premium group rounded-3xl'>
            <CardHeader>
              <div className='w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-primary/10'>
                <Code className='h-7 w-7 text-primary' />
              </div>
              <CardTitle className='text-2xl font-bold text-foreground'>
                Technologies We Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {service.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant='secondary'
                    className='bg-primary/10 text-primary border-none text-sm px-4 py-1 font-bold rounded-lg'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className='mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10'>
                <p className='text-sm text-muted-foreground font-medium leading-relaxed'>
                  <strong className='text-foreground font-bold'>
                    Modern Stack:
                  </strong>{" "}
                  We use cutting-edge technologies and best practices to ensure
                  your project is built for performance, scalability, and
                  maintainability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/projects";
import { Quote } from "lucide-react";
import Wrapper from "../shared/Wrapper";

interface ProjectDetailTestimonialProps {
  project: Project;
}

export default function ProjectDetailTestimonial({
  project,
}: ProjectDetailTestimonialProps) {
  if (!project.testimonial || !project.testimonial.quote) {
    return null;
  }

  return (
    <section className='bg-background'>
      <Wrapper>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-3xl md:text-5xl font-black text-foreground tracking-tight'>
            Success Stories
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto font-medium'>
            Hear directly from our clients about their journey with{" "}
            <span className='text-primary'>{project.title}</span> and the impact
            our solutions had on their business.
          </p>
        </div>
        <div className='max-w-5xl mx-auto'>
          <Card className='border-border bg-card/30 backdrop-blur-sm shadow-premium rounded-[3rem] overflow-hidden relative group'>
            {/* Design elements */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50' />

            <CardContent className='p-12 md:p-20 relative z-10'>
              <div className='text-center'>
                <div className='mb-10 relative inline-block'>
                  <div className='w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 rotate-3 group-hover:rotate-0'>
                    <Quote className='h-10 w-10' />
                  </div>
                  <div className='absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse' />
                </div>

                <blockquote className='text-2xl md:text-4xl font-black text-foreground leading-tight mb-12 italic transition-all duration-500'>
                  &quot;{project.testimonial.quote}&quot;
                </blockquote>

                <div className='flex flex-col items-center gap-4'>
                  <div className='w-16 h-1 w-24 bg-primary/20 rounded-full mb-4' />
                  <div className='space-y-1'>
                    <p className='font-black text-foreground text-2xl'>
                      {project.testimonial.author}
                    </p>
                    <div className='flex items-center justify-center gap-3'>
                      <p className='text-muted-foreground font-bold'>
                        {project.testimonial.position}
                      </p>
                      <div className='w-1 h-1 bg-muted-foreground/30 rounded-full' />
                      <p className='text-primary font-black uppercase tracking-widest text-sm'>
                        {project.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
}

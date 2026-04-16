import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/projects";
import { CheckCircle, Target, Lightbulb } from "lucide-react";
import Wrapper from "../shared/Wrapper";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  return (
    <section className='bg-background'>
      <Wrapper>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Project Overview */}
          <div className='lg:col-span-2 space-y-12'>
            <div className='animate-in fade-in slide-in-from-bottom duration-700'>
              <h2 className='text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight'>
                Project Overview
              </h2>
              <div className='prose prose-lg max-w-none text-muted-foreground'>
                <p className='leading-relaxed mb-6 font-medium text-lg'>
                  {project.description}
                </p>
                <p className='leading-relaxed font-medium'>
                  This {project.projectType.toLowerCase()} was developed with a focus on 
                  <span className='text-primary font-bold'> performance and scalability</span>. 
                  Completed in {project.projectDuration} for {project.clientName}, 
                  leveraging a dedicated team of {project.teamSize} professionals to deliver 
                  an industry-leading digital experience.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className='animate-in fade-in slide-in-from-bottom delay-100 duration-700'>
              <h3 className='text-2xl md:text-3xl font-black text-foreground mb-8 tracking-tight'>
                Key Features
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {project.features.map((feature, index) => (
                  <div key={index} className='flex items-center p-5 bg-card/30 backdrop-blur-sm rounded-2xl border border-border group hover:border-primary/30 transition-all'>
                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                      <CheckCircle className='h-5 w-5' />
                    </div>
                    <span className='text-foreground font-bold'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className='animate-in fade-in slide-in-from-bottom delay-200 duration-700'>
              <h3 className='text-2xl md:text-3xl font-black text-foreground mb-8 tracking-tight'>
                Technology Stack
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {/* Tech Item */}
                {project.technologies.map((tech, index) => (
                  <div key={index} className='flex flex-col items-center p-6 bg-primary/5 rounded-3xl border border-primary/10 group hover:bg-primary transition-all duration-300'>
                    <div className='text-primary font-black text-center group-hover:text-primary-foreground transition-colors'>
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Challenges & Solutions */}
          <div className='space-y-8 animate-in fade-in slide-in-from-right duration-700'>
            <Card className='border-border bg-card/30 backdrop-blur-sm shadow-premium rounded-3xl overflow-hidden'>
              <CardHeader className='bg-primary/5 border-b border-border p-8'>
                <CardTitle className='text-2xl font-black text-foreground flex items-center gap-3'>
                  <Target className='h-6 w-6 text-primary' />
                  Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className='p-8'>
                <ul className='space-y-6'>
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className='flex gap-4'>
                      <div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
                      <p className='text-muted-foreground font-medium leading-relaxed'>{challenge}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className='border-border bg-card/30 backdrop-blur-sm shadow-premium rounded-3xl overflow-hidden'>
              <CardHeader className='bg-primary/5 border-b border-border p-8'>
                <CardTitle className='text-2xl font-black text-foreground flex items-center gap-3'>
                  <Lightbulb className='h-6 w-6 text-primary' />
                  Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className='p-8'>
                <ul className='space-y-6'>
                  {project.solutions.map((solution, index) => (
                    <li key={index} className='flex gap-4'>
                      <div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
                      <p className='text-muted-foreground font-medium leading-relaxed'>{solution}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

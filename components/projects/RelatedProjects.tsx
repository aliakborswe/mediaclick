import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import Wrapper from "../shared/Wrapper";

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className='bg-linear-to-b from-primary/5 to-background '>
      <Wrapper>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-3xl md:text-5xl font-black text-foreground tracking-tight'>
            Related Projects
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto font-medium'>
            Explore more projects from our portfolio that showcase similar
            technologies and solutions that drive business success.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='group hover:shadow-premium transition-all duration-500 border-border bg-card/30 backdrop-blur-sm overflow-hidden rounded-3xl flex flex-col p-0'
            >
              <CardContent className='p-0 flex flex-col h-full'>
                <div className='relative aspect-video overflow-hidden h-64'>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  
                  {/* Actions Overlay */}
                  <div className='absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <Link
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1'
                    >
                      <Button
                        size='sm'
                        className='w-full bg-white text-slate-900 hover:bg-white/90 font-bold rounded-xl h-10 shadow-lg transition-all hover:scale-105'
                      >
                        <ExternalLink className='h-4 w-4 mr-2' />
                        Live Demo
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Content Section */}
                <div className='p-8 flex flex-col flex-grow'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge variant='secondary' className='bg-primary/10 text-primary border-none text-[10px] uppercase font-bold tracking-widest px-3'>
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className='text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300 mb-3'>
                    <Link href={`/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  
                  <p className='text-muted-foreground font-medium line-clamp-2 mb-6 leading-relaxed'>
                    {project.shortDescription}
                  </p>

                  <div className='mt-auto pt-6 border-t border-border/50 flex items-center justify-between'>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className='inline-flex items-center font-bold text-primary group/link text-sm'
                    >
                      View Case Study
                      <ArrowRight className='h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform' />
                    </Link>
                    <div className='flex gap-2'>
                        {project.technologies.slice(0, 2).map((tech, i) => (
                            <span key={i} className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

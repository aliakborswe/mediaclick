import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface ProjectsProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: ProjectsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {projects.map((project, index) => (
        <AnimatedSection
          key={project.id}
          variant='slideUp'
          delay={index * 0.1}
          className='flex'
        >
          <Card
            key={project.id}
            className='bg-white border-slate-200 hover:shadow-xl transition-all group overflow-hidden p-0 flex flex-col w-full'
          >
            <CardContent className='p-0 flex flex-col h-full'>
              <div className='relative aspect-video overflow-y-hidden h-75 '>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.projectType}`}
                  quality={100}
                  width={1200}
                  height={1200}
                  priority
                  className='w-full duration-20000 hover:translate-y-[calc(-100%+300px)]'
                />

                {/* Project Links Overlay */}
                <div className='absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <Link
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button
                      size='sm'
                      className='bg-white/90 text-slate-900 hover:bg-white cursor-pointer'
                    >
                      <ExternalLink className='h-4 w-4' />
                    </Button>
                  </Link>
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button
                        size='sm'
                        className='bg-white/90 text-slate-900 hover:bg-white cursor-pointer'
                      >
                        <FolderGit2 className='h-4 w-4' />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className='flex flex-col flex-1 p-4'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 group-hover:text-accent transition-colors mb-4'>
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                </div>
                <p className='text-slate-600 mb-4 line-clamp-2'>
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-1 mt-auto'>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='text-xs bg-slate-100 text-slate-700'
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant='secondary'
                      className='text-xs bg-slate-100 text-slate-700'
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* View Details Button (stick to bottom) */}
                <div className='mt-auto pt-3'>
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button className='w-full bg-accent text-black hover:bg-accent/90 cursor-pointer'>
                      View project details
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}

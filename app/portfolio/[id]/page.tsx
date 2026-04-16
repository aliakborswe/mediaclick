import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import ProjectDetailGallery from "@/components/projects/ProjectDetailGallery";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDetailTestimonial from "@/components/projects/ProjectDetailTestimonial";
import RelatedProjects from "@/components/projects/RelatedProjects";
import { getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PortfolioDetails({ params }: Props) {
  const { id } = await params;
  const project = await getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(
    project.slug,
    project.category,
  );

  return (
    <div className='flex flex-col'>
      <ProjectDetailHero project={project} />
      <ProjectDetailContent project={project} />
      <ProjectDetailGallery project={project} />
      {project.testimonial && project.testimonial.quote && (
        <ProjectDetailTestimonial project={project} />
      )}
      <RelatedProjects projects={relatedProjects} />
    </div>
  );
}

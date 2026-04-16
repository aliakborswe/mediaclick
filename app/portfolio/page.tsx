import ProjectHero from "@/components/projects/ProjectHero";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import SectionTitle from "@/components/shared/SectionTitle";
import Wrapper from "@/components/shared/Wrapper";
import { getProjects } from "@/lib/projects";

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <section>
        <ProjectHero />
      </section>
      <section id="portfolio">
        <Wrapper>
          <SectionTitle
            className='mb-16'
            centered
            title='Our Portfolios'
            description="Explore our latest digital marketing projects and see the real results we've achieved for our clients across various industries. "
          />
          {/* Portfolio Grid */}
          <PortfolioGrid projects={projects} />
        </Wrapper>
      </section>
    </>
  );
}

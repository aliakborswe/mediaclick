import PortfolioGrid from "@/components/shared/PortfolioGrid";
import SectionTitle from "@/components/shared/SectionTitle";
import Wrapper from "@/components/shared/Wrapper";

export default function PortfolioPage() {
  return (
    <section>
      <Wrapper>
        <SectionTitle
          className='mb-16'
          centered
          title='Our Portfolios'
          description="Explore our latest digital marketing projects and see the real results we've achieved for our clients across various industries. "
        />
        {/* Portfolio Grid */}
        <PortfolioGrid />
      </Wrapper>
    </section>
  );
}

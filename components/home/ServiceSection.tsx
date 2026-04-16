import SectionTitle from "../shared/SectionTitle";
import ServicesGrid from "../shared/ServicesGrid";
import Wrapper from "../shared/Wrapper";

export default function ServiceSection() {
  return (
    <section>
      <Wrapper>
        <SectionTitle
          className='mb-16'
          centered
          subtitle='What We Do Best'
          title='Our Services'
          description='Comprehensive digital marketing solutions tailored to your business needs and goals.'
        />
        {/* Services Grid */}
        <ServicesGrid />
      </Wrapper>
    </section>
  );
}

import { getServices } from "@/lib/services";
import SectionTitle from "../shared/SectionTitle";
import ServicesGrid from "../shared/ServicesGrid";
import Wrapper from "../shared/Wrapper";

export default async function ServiceSection() {
  const services = await getServices();

  return (
    <section className='w-full bg-background'>
      <Wrapper>
        <SectionTitle
          centered
          bar
          subtitle='What We Do Best'
          title='Our Services'
          description='Comprehensive digital marketing solutions tailored to your business needs and goals.'
          className='mb-16'
        />
        {/* Services Grid */}
        <ServicesGrid services={services} />
      </Wrapper>
    </section>
  );
}

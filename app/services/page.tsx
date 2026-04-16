import { ServicesHero } from "@/components/services/ServicesHero";
import SectionTitle from "@/components/shared/SectionTitle";
import ServicesGrid from "@/components/shared/ServicesGrid";
import Wrapper from "@/components/shared/Wrapper";
import { getServices } from "@/lib/services";

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className='flex flex-col'>
      <ServicesHero />
      <section className='bg-background' id='services'>
        <Wrapper>
          <SectionTitle
            bar
            centered
            subtitle='What We Do Best'
            title='Our Services'
            description="Comprehensive digital solutions tailored to your business needs and goals. Whether you're looking to increase visibility, drive sales, or build brand awareness, we have the expertise to help."
          />
          {/* Services Grid */}
          <ServicesGrid services={services} />
        </Wrapper>
      </section>
    </div>
  );
}

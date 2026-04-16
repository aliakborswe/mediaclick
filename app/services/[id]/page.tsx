import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { ServiceDetailFeatures } from "@/components/services/ServiceDetailFeatures";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { getRelatedServices, getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = await getServiceBySlug(id);

  if (!service) {
    notFound();
  }

  const relatedServices = await getRelatedServices(
    service.slug,
    service.category,
  );

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailFeatures service={service} />
      {relatedServices.length > 0 && (
        <RelatedServices services={relatedServices} />
      )}
    </>
  );
}

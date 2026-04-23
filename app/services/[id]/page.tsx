import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { ServiceDetailFeatures } from "@/components/services/ServiceDetailFeatures";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { getRelatedServices, getServiceBySlug } from "@/lib/services";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const simpleSubmenuPages: Record<string, { title: string; summary: string }> = {
  finance: {
    title: "Banking & Financial Sector",
    summary: "Simple overview page for financial sector services.",
  },
  energy: {
    title: "Energy, Resources & Utilities",
    summary: "Simple overview page for energy and utilities services.",
  },
  government: {
    title: "Government",
    summary: "Simple overview page for government-focused service offerings.",
  },
  "health-care": {
    title: "Health Care",
    summary: "Simple overview page for health care services.",
  },
  "high-tech": {
    title: "High Tech",
    summary: "Simple overview page for high-tech services.",
  },
  insurance: {
    title: "Insurance",
    summary: "Simple overview page for insurance industry services.",
  },
  "life-science": {
    title: "Life Science",
    summary: "Simple overview page for life science services.",
  },
  manufacturing: {
    title: "Manufacturing",
    summary: "Simple overview page for manufacturing services.",
  },
  "media-information": {
    title: "Media & Information",
    summary: "Simple overview page for media and information services.",
  },
  retail: {
    title: "Retail & Consumer Product",
    summary: "Simple overview page for retail and consumer services.",
  },
  telecom: {
    title: "Telecom",
    summary: "Simple overview page for telecom services.",
  },
  "travel-logistics": {
    title: "Travel, Logistics & Transportation",
    summary:
      "Simple overview page for travel, logistics, and transportation services.",
  },
  "product-development": {
    title: "Product Development",
    summary: "Simple overview page for product development services.",
  },
  branding: {
    title: "Branding & Re-branding",
    summary: "Simple overview page for branding services.",
  },
  "customer-insight": {
    title: "Customer Insight",
    summary: "Simple overview page for customer insight services.",
  },
  "market-research": {
    title: "Market Research",
    summary: "Simple overview page for market research services.",
  },
  "pr-marketing": {
    title: "PR & Marketing",
    summary: "Simple overview page for PR and marketing services.",
  },
  ecommerce: {
    title: "E-Commerce & Web Dev.",
    summary: "Simple overview page for e-commerce and web development services.",
  },
  "media-planning": {
    title: "Media Planning and Buying",
    summary: "Simple overview page for media planning and buying services.",
  },
};

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = await getServiceBySlug(id);

  if (!service) {
    const fallback = simpleSubmenuPages[id];

    if (!fallback) {
      notFound();
    }

    return (
      <section className='container mx-auto px-4 py-20 lg:px-12'>
        <div className='mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 lg:p-12'>
          <h1 className='text-3xl font-black text-foreground lg:text-4xl'>
            {fallback.title}
          </h1>
          <p className='mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg'>
            {fallback.summary}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              href='/contact'
              className='rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90'
            >
              Contact Us
            </Link>
            <Link
              href='/services'
              className='rounded-full border border-primary/20 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/5'
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    );
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

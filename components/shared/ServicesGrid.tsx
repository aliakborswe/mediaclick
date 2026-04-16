import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";
import { Service } from "@/lib/services";

interface ServicesProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
      {services.map((service, index) => (
        <AnimatedSection
          key={service.title}
          variant='slideUp'
          delay={index * 0.1}
        >
          <div className='group cursor-pointer h-full rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card hover:border-primary/30'>
            {/* Image Area */}
            <div className='relative h-48 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden'>
              {service.banner ? (
                <Image
                  src={service.banner}
                  alt={service.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
              ) : (
                <div className='text-6xl group-hover:scale-110 transition-transform duration-300'>
                  🚀
                </div>
              )}
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col gap-2 justify-between'>
              <h3 className='text-lg font-bold text-primary mb-2 transition-colors'>
                {service.title}
              </h3>
              <p className='text-sm text-muted-foreground'>
                {service.description}
              </p>
              {service.slug && (
                <Link
                  href={`/services/${service.slug}`}
                  className='inline-flex items-center gap-2 font-medium text-secondary mt-2 transition-colors duration-300 group/link'
                >
                  Learn more
                  <ArrowRight className='h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300' />
                </Link>
              )}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

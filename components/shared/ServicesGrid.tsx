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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {services.map((service, index) => (
        <AnimatedSection
          key={service.title}
          variant='slideUp'
          delay={index * 0.1}
        >
          <div className='group relative h-full rounded-3xl border border-border overflow-hidden hover:shadow-premium transition-all duration-500 bg-card/30 backdrop-blur-sm hover:border-primary/50 flex flex-col'>
            {/* Image Area */}
            <div className='relative h-56 overflow-hidden'>
              {service.banner ? (
                <Image
                  src={service.banner}
                  alt={service.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
              ) : (
                <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center'>
                  <span className='text-6xl group-hover:scale-110 transition-transform duration-300'>
                    🚀
                  </span>
                </div>
              )}
              <div className='absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity' />
            </div>

            {/* Content */}
            <div className='p-8 flex flex-col flex-grow'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-2xl font-black text-foreground transition-colors group-hover:text-primary'>
                  {service.title}
                </h3>
              </div>
              <p className='text-muted-foreground leading-relaxed text-base line-clamp-3 mb-8'>
                {service.description}
              </p>

              <div className='mt-auto pt-6 border-t border-border/50'>
                {service.slug && (
                  <Link
                    href={`/services/${service.slug}`}
                    className='inline-flex items-center justify-between w-full font-bold text-primary group/link'
                  >
                    <span className='group-hover:translate-x-1 transition-transform'>
                      Learn details
                    </span>
                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-all duration-300'>
                      <ArrowRight className='h-5 w-5' />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

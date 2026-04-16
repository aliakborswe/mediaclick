import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import type { Service } from "@/lib/services";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

interface ServiceDetailHeroProps {
  service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className='relative bg-background overflow-hidden pt-24 lg:pt-32'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-linear-to-b from-primary/5 to-background z-0'></div>

      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50'></div>

      <Wrapper className='relative z-10 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <Badge className='mb-6 bg-primary/10 text-primary border-none text-sm px-4 py-1'>
              {service.category}
            </Badge>

            <h1 className='text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight'>
              {service.title}
            </h1>

            <p className='text-xl text-muted-foreground mb-10 leading-relaxed font-medium'>
              {service.intro}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
              <div className='flex items-center text-muted-foreground'>
                <div className='w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-3'>
                  <Users className='h-5 w-5 text-primary' />
                </div>
                <span className='font-bold'>Expert Team</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-4'>
              <Link href={"/contact"}>
                <Button
                  size='lg'
                  className='bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl px-10 py-6 h-auto shadow-premium transition-all'
                >
                  {service.cta}
                  <ArrowRight className='h-5 w-5 ml-2' />
                </Button>
              </Link>
              <Link href={"/portfolio"}>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-primary/20 hover:bg-primary/5 text-primary font-bold rounded-xl px-10 py-6 h-auto transition-all'
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>

          <div className='relative'>
            <div className='relative h-[450px] rounded-3xl overflow-hidden shadow-premium border border-border group'>
              <Image
                src={service.banner || "/placeholder.svg"}
                alt={service.title}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
                priority
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent'></div>
            </div>

            <div className='absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-premium border border-border transition-transform hover:-translate-y-1'>
              <div className='text-4xl font-black text-primary mb-1'>
                {service.technologies.length}+
              </div>
              <div className='text-sm font-bold text-muted-foreground uppercase tracking-wider'>
                Core Technologies
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

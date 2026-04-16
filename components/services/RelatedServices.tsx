import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

interface RelatedServicesProps {
  services: Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className='bg-background'>
      <Wrapper>
        <SectionTitle
          centered
          subtitle='Related Services'
          description='Explore other services that complement your project and help you achieve your goals.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Card
              key={service.id}
              className='group hover:shadow-premium transition-all duration-500 border-border bg-card/30 backdrop-blur-sm overflow-hidden rounded-3xl flex flex-col'
            >
              <div className='relative h-64 overflow-hidden'>
                <Image
                  src={service.banner || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <div className='absolute top-4 left-4'>
                  <Badge
                    variant='secondary'
                    className='bg-primary/90 text-primary-foreground backdrop-blur-md border-none shadow-lg'
                  >
                    {service.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className='flex-grow pb-2'>
                <CardTitle className='text-2xl font-black group-hover:text-primary transition-colors duration-300'>
                  {service.title}
                </CardTitle>
                <CardDescription className='text-muted-foreground text-base line-clamp-2 mt-2 leading-relaxed'>
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='pt-0'>
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant='ghost'
                    className='w-full justify-between hover:bg-primary hover:text-primary-foreground text-primary font-bold group/btn transition-all duration-300 rounded-xl mt-4 border border-primary/20'
                  >
                    Explore Service
                    <ArrowRight className='h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform' />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

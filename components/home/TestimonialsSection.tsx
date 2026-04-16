"use client";

import React from "react";
import { MessageSquareQuote, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "../shared/SectionTitle";
import Wrapper from "../shared/Wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const trustpilot = "/icons/trustpilot.svg";
const google = "/icons/google.svg";
const img1 = "/images/clients/brittny-thomson.jpg";
const img2 = "/images/clients/lucia.webp";
const img3 = "/images/clients/qawsedstation.webp";
const img4 = "/images/clients/victor-petraitis.png";

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const testimonials = [
    {
      id: 1,
      name: "Brittny Thomson",
      link: "",
      position: "CEO at Rank Pulse Digital",
      company: "Rank Pulse Digital",
      avatar: img1,
      quote:
        "Great working with this creator. They are tentative to to my needs and very patient. They also produce quality work and good with communication.",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      link: "",
      position: "CMO, TechVision Inc.",
      company: "TechVision Inc.",
      avatar: img2,
      quote:
        "MediaClicking completely transformed our digital presence. Their blend of creativity and data analytics led to a 200% increase in our online leads within six months.",
    },
    {
      id: 3,
      name: "Michael Chen",
      link: "",
      position: "Founder, Zenith Retail",
      company: "Zenith Retail",
      avatar: img3,
      quote:
        "Working with them was a breath of fresh air. They don't just execute; they strategize. The rebranding effort was smooth and exactly what we needed.",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      link: "",
      position: "VP of Marketing, GlobalFin",
      company: "GlobalFin",
      avatar: img4,
      quote:
        "Their team's predictive intelligence models gave us insights we never knew existed. We are highly impressed with the ROI generated from the recent campaigns.",
    },
  ];

  return (
    <section className='w-full bg-background'>
      <Wrapper>
        <SectionTitle
          bar
          title='Testimonials'
          icon={<MessageSquareQuote className='w-4 h-4' />}
          titleClass='bg-primary/10 text-primary'
          subtitle='What Our Clients Say'
          description="Our success is measured by our clients' success. See their feedback and experiences."
          centered
        />

        <div className='md:mt-16 relative overflow-hidden px-12'>
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => {
              plugin.current.play();
            }}
            className='w-full mx-auto'
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className='basis-full lg:basis-1/2'
                >
                  <div className='bg-card rounded-xl py-10 px-8 shadow-sm border border-border hover:border-primary/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center h-full'>
                    {/* Avatar and Info */}
                    <div className='shrink-0 text-center md:text-left'>
                      <div className='mb-4 relative w-24 h-24 mx-auto md:mx-0'>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className='rounded-full object-cover border-2 border-primary/20 p-1'
                        />
                        <div className='absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg'>
                          <Quote className='w-4 h-4' />
                        </div>
                      </div>
                      <div>
                        <h4 className='font-bold text-foreground group-hover:text-primary transition-colors'>
                          {testimonial.name}
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className='flex flex-col gap-2 items-center justify-between w-full h-full relative'>
                      <blockquote className='text-lg italic text-foreground relative text-center md:text-left leading-relaxed'>
                        “{testimonial.quote}”
                      </blockquote>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Trust Pilot, Google  */}
        <div className='pt-10 flex flex-col sm:flex-row justify-center items-center gap-10'>
          <Link
            href={"https://www.trustpilot.com/review/Media-Click.com"}
            target='_blank'
          >
            <Image
              src={trustpilot}
              alt='Trustpilot Reviews'
              width={200}
              height={200}
            />
          </Link>
          <Link
            href={
              "https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-VsYM8rgIEEPlDH23saKWmDedMiPD8yHd-2BmaV4ZnIIwJc7AL0j2LIKv8TNWxAU-nUeE2lE4zDHrPKE6p8E9v2x54_&q=Media-Click+Reviews"
            }
            target='_blank'
          >
            <Image src={google} alt='Google Reviews' width={200} height={200} />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}

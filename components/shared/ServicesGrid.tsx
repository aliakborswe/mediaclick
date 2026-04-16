"use client";

import {
  Search,
  TrendingUp,
  Globe,
  ShoppingCart,
  Share2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import Link from "next/link";

const SERVICES = [
  {
    icon: <Search className='h-6 w-6' />,
    title: "SEO Services",
    description:
      "Boost your online visibility with our comprehensive SEO strategies. We optimize your website to rank higher and attract qualified traffic.",
    href: "/services/seo",
  },
  {
    icon: <TrendingUp className='h-6 w-6' />,
    title: "PPC Advertising",
    description:
      "Maximize ROI with data-driven paid advertising campaigns across Google, Facebook, and other platforms.",
    href: "/services/ppc",
  },
  {
    icon: <Globe className='h-6 w-6' />,
    title: "Web Design",
    description:
      "Beautiful, responsive websites that convert visitors into customers. User-centered design meets modern technology.",
    href: "/services/web-design",
  },
  {
    icon: <ShoppingCart className='h-6 w-6' />,
    title: "E-Commerce Solutions",
    description:
      "End-to-end e-commerce platforms that drive sales. From setup to optimization, we handle it all.",
    href: "/services/ecommerce",
  },
  {
    icon: <Share2 className='h-6 w-6' />,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and grow your brand across social platforms with strategic content and campaigns.",
    href: "/services/social-media",
  },
  {
    icon: <Zap className='h-6 w-6' />,
    title: "Interactive Media",
    description:
      "Create immersive experiences with interactive content, animations, and cutting-edge multimedia solutions.",
    href: "/services/interactive",
  },
];

export default function ServicesGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
      {SERVICES.map((service, index) => (
        <AnimatedSection
          key={service.title}
          variant='slideUp'
          delay={index * 0.1}
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className='group h-full flex flex-col p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300'
          >
            <div className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300'>
              <div className='text-primary group-hover:text-primary-foreground text-2xl'>
                {service.icon}
              </div>
            </div>

            <h3 className='mb-3 text-xl font-semibold text-foreground'>
              {service.title}
            </h3>
            <p className='mb-6 grow text-muted-foreground'>
              {service.description}
            </p>

            {service.href && (
              <Link
                href={service.href}
                className='inline-flex items-center gap-2 font-medium text-primary hover:text-primary-dark transition-colors duration-300 group/link'
              >
                Learn more
                <ArrowRight className='h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300' />
              </Link>
            )}
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  );
}

"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import img1 from "@/assets/images/Branding-Strategy.jpg";

const HERO_WORDS = ["Growth", "Success", "Impact", "Innovation", "Results"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

export function HeroSection() {
  return (
    <section className='relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-linear-to-br from-background via-background to-primary/5 pt-10'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-50' />
        <div className='absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-50' />
      </div>

      <Wrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='space-y-8'
          >
            {/* Main Headline with word animation */}
            <div className='space-y-4'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='h-1 w-12 bg-primary rounded-full' />
                <span className='text-sm font-semibold text-primary'>
                  Your Digital Growth Partner
                </span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground'>
                <span>Drive </span>
                <span className='inline-flex flex-col h-[calc(1.2em*1.5)]'>
                  <motion.span
                    key={"growth"}
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className='text-primary'
                  >
                    Growth
                  </motion.span>
                </span>
                <p className='p-0 m-0 -mt-6'>Today</p>
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p
              variants={wordVariants}
              custom={0}
              className='text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed'
            >
              Strategic digital marketing that delivers measurable results. From
              SEO to social media, we help your business reach new heights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={wordVariants}
              custom={1}
              className='flex flex-col sm:flex-row gap-4 pt-4'
            >
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='bg-primary hover:bg-primary-dark text-primary-foreground px-8'
                >
                  Start Your Campaign
                </Button>
              </Link>
              <Link href='/portfolio'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-primary text-primary hover:bg-primary/10 px-8'
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              variants={wordVariants}
              custom={2}
              className='flex flex-wrap gap-6 pt-8 text-sm'
            >
              <div>
                <p className='font-bold text-foreground'>200+</p>
                <p className='text-muted-foreground'>Clients Served</p>
              </div>
              <div>
                <p className='font-bold text-foreground'>98%</p>
                <p className='text-muted-foreground'>Retention Rate</p>
              </div>
              <div>
                <p className='font-bold text-foreground'>5x</p>
                <p className='text-muted-foreground'>Average ROI</p>
              </div>
            </motion.div>
          </motion.div>

          <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 blur-3xl' />

          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className='relative h-full flex items-center justify-center rounded-2xl backdrop-blur-sm p-8'>
              <Image
                src={img1}
                width={800}
                height={800}
                alt='MediaClick Logo'
                className='h-116 aspect-video rounded-2xl'
              />
            </div>
          </motion.div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-170 h-170 shadow-[0_0_80px_rgba(59,130,246,0.2)] rounded-full'></div>
      </Wrapper>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <ChevronDown className='h-6 w-6 text-primary opacity-60' />
      </motion.div>
    </section>
  );
}

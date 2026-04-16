"use client";

import { ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scaleIn";
  delay?: number;
  duration?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

export function AnimatedSection({
  children,
  className = "",
  variant = "fadeIn",
  delay = 0,
  duration = 0.6,
  staggerChildren = false,
  staggerDelay = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
    amount: 0.25,
  });

  const selectedVariant = variants[variant] as any;
  const transitionDuration =
    duration || selectedVariant.visible.transition.duration;

  const motionVariant = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...selectedVariant.visible.transition,
        duration: transitionDuration,
        delay,
      },
    },
  };

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        className={className}
        style={{
          contain: "layout",
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={motionVariant}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

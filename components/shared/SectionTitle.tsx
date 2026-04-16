import { cn } from "@/lib/utils";
import React from "react";
import { AnimatedSection } from "./AnimatedSection";

type Props = {
  title?: string;
  titleClass?: string;
  icon?: React.ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
  descriptionClassName?: string;
  barClass?: string;
  bar?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  description,
  className,
  centered = false,
  bar = false,
}: Props) {
  return (
    <AnimatedSection
      variant='slideUp'
      className={cn(centered && "text-center", className)}
    >
      <div className='inline-flex items-center gap-2 mb-4'>
        {bar && <div className='w-8 h-1 rounded-full bg-primary' />}
        <span className='text-sm font-semibold text-primary'>{subtitle}</span>
      </div>
      <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
        {title}
      </h2>
      <p className={cn(centered ? "mx-auto": "", "text-lg text-muted-foreground max-w-2xl")}>
        {description}
      </p>
    </AnimatedSection>
  );
}

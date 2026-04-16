import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  cTitle?: string;
  subTitle?: string;
  description: string;
  dClassName?: string;
  dStrong?: string;
  prefix?: string;
};
const HeroContent = ({
  title,
  cTitle,
  subTitle,
  description,
  dStrong,
  prefix,
  dClassName,
}: Props) => {
  return (
    <>
      <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-6'>
        {title} <span className='text-accent'>{cTitle}</span>
      </h1>
      {subTitle && (
        <h2 className='text-lg sm:text-2xl font-semibold text-primary/95 mb-6'>
          {subTitle}
        </h2>
      )}

      <p
        className={cn("text-base sm:text-lg mb-8 leading-relaxed", dClassName)}
      >
        {prefix} <strong>{dStrong}</strong> {description}
      </p>
    </>
  );
};

export default HeroContent;

"use client";

import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";
import React from "react";

type Props = {
  nextSectionId?: string;
  isIcon?: boolean;
  className?: string;
  iconClassName?: string;
  text?: string;
};

export default function NextSection({
  nextSectionId,
  isIcon = true,
  iconClassName,
  className,
  text,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!nextSectionId) return;

    const targetElement = document.querySelector(nextSectionId);
    if (targetElement instanceof HTMLElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={nextSectionId ?? "#"}
      onClick={handleClick}
      className={cn(
        isIcon && "animate-bounce border py-4 px-4 rounded-full",
        className
      )}
    >
      {isIcon && <MoveDown className={cn("w-6 h-6", iconClassName)} />}
      {text && (
        <span className={cn("rounded-lg transition-all duration-200")}>
          {text}
        </span>
      )}
    </a>
  );
}

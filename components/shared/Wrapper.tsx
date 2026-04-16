import { cn } from "@/lib/utils";
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn(`container mx-auto px-4 py-16 md:py-24 relative ${className}`)}>
      {children}
    </div>
  );
};

export default Wrapper;

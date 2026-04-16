import { cn } from "@/lib/utils";
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn(`container mx-auto px-4 py-12 md:py-16 ${className}`)}>
      {children}
    </div>
  );
};

export default Wrapper;

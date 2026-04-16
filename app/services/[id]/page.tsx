"use client";
import { usePathname } from "next/navigation";


export default function ServiceDetailPage() {
    const pathname = usePathname();
  return <div>service detail page: {pathname}</div>;
}

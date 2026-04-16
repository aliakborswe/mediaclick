import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "E-Commerce Platform Growth",
    category: "E-Commerce",
    description: "250% increase in online sales",
    image: "🛍️",
  },
  {
    id: 2,
    title: "SaaS Lead Generation",
    category: "PPC",
    description: "3x qualified leads, 40% lower CPC",
    image: "📊",
  },
  {
    id: 3,
    title: "Local Business SEO",
    category: "SEO",
    description: "Ranked #1 for 45+ keywords",
    image: "🗺️",
  },
  {
    id: 4,
    title: "Brand Launch Campaign",
    category: "Social Media",
    description: "500K+ reach in 3 months",
    image: "📱",
  },
  {
    id: 5,
    title: "Web Design & Development",
    category: "Web Design",
    description: "45% increase in conversions",
    image: "🎨",
  },
  {
    id: 6,
    title: "Interactive Campaign",
    category: "Interactive Media",
    description: "Viral engagement, 2M+ impressions",
    image: "✨",
  },
];

export default function PortfolioGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {PORTFOLIO_ITEMS.map((item, index) => (
        <AnimatedSection key={item.id} variant='slideUp' delay={index * 0.1}>
          <Link href={`/portfolio/${item.id}`}>
            <div className='group cursor-pointer h-full rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card hover:border-primary/30'>
              {/* Image Area */}
              <div className='relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden'>
                <div className='text-6xl group-hover:scale-110 transition-transform duration-300'>
                  {item.image}
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full'>
                    {item.category}
                  </span>
                  <ArrowUpRight className='h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity' />
                </div>

                <h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  {item.title}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  );
}

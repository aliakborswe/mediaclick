import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/blogs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";

interface BlogGridProps {
  blogs: BlogPost[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {blogs.map((blog, index) => (
        <AnimatedSection
          key={blog.id}
          variant='slideUp'
          delay={index * 0.1}
          className='flex'
        >
          <Card className='group p-0 bg-card border-none shadow-none hover:shadow-2xl transition-all duration-300 flex flex-col w-full overflow-hidden rounded-3xl'>
            <div className='relative aspect-4/3 overflow-hidden'>
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute top-4 left-4'>
                <Badge className='bg-white text-primary hover:bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border-none'>
                  {blog.category}
                </Badge>
              </div>
            </div>

            <CardContent className='pt-8 pb-8 px-6 flex flex-col flex-1 bg-white dark:bg-card'>
              <span className='text-[13px] text-muted-foreground font-medium mb-4 block'>
                {blog.date}
              </span>

              <h3 className='text-[22px] font-bold leading-tight mb-8 group-hover:text-primary transition-colors line-clamp-2'>
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h3>

              <div className='mt-auto flex items-center gap-2 group/link'>
                <Link
                  href={`/blog/${blog.slug}`}
                  className='text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors'
                >
                  Read Article
                  <ArrowUpRight className='w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5' />
                </Link>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}

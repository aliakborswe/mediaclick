import Wrapper from "@/components/shared/Wrapper";
import { getBlogs } from "@/lib/blogs";
import BlogGrid from "@/components/shared/BlogGrid";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className='bg-[#F8F9FA] dark:bg-background pt-24 pb-32 min-h-screen'>
      <Wrapper>
        
        <BlogGrid blogs={blogs} />
      </Wrapper>
    </div>
  );
}

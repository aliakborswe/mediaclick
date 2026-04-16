import { getBlogs } from "@/lib/blogs";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";
import BlogGrid from "../shared/BlogGrid";


export default async function Insights() {
    const blogs = await getBlogs();
  return (
    <section>
      <Wrapper>
        <SectionTitle subtitle='Our Insights' title='Thought Leadership' className="mb-16" />
        <BlogGrid blogs={blogs} />
      </Wrapper>
    </section>
  );
}
import fs from "fs";
import path from "path";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

export async function getBlogs(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading blogs.json:", error);
    return [];
  }
}

export async function getBlogBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

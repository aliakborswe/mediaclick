import fs from "fs";
import path from "path";

/**
 * Project representing a portfolio item
 */
export interface Project {
  id: number;
  title: string;
  category: "web" | "mobile";
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  slug: string;
  technologies: string[];
  projectType: string;
  clientName: string;
  projectDuration: string;
  teamSize: number;
  completionDate: string;
  url: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  testimonial: {
    quote?: string;
    author: string;
    position: string;
    company: string;
  };
  tags: string[];
  featured: boolean;
  status: "completed" | "ongoing";
}

/**
 * Fetches all available projects from the projects.json file
 *
 * @returns Promise resolving to an array of Project objects
 * @throws Error if the projects.json file cannot be read
 */
export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectsByCategory(
  category: "web" | "mobile"
): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.category === category);
}

export async function getRelatedProjects(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Project[]> {
  const projects = await getProjects();
  return projects
    .filter(
      (project) => project.slug !== currentSlug && project.category === category
    )
    .slice(0, limit);
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((project) => project.slug);
}


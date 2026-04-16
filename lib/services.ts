import { promises as fs } from "fs";
import path from "path";

/**
 * Service representing a business offering
 */
export interface Service {
  id: string;
  title: string;
  color: string;
  description: string;
  intro: string;
  benefits: string[];
  delivery: string;
  why_astzo: string;
  cta: string;
  icon: string;
  banner: string;
  slug: string;
  category: string;
  technologies: string[];
  features: string[];
}

/**
 * Fetches all available services from the services.json file
 *
 * @returns Promise resolving to an array of Service objects
 * @throws Error if the services.json file cannot be read
 */
export async function getServices(): Promise<Service[]> {
  const filePath = path.join(process.cwd(), "public", "services.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((service) => service.slug === slug) || null;
}

export async function getServiceSlugs(): Promise<string[]> {
  const services = await getServices();
  return services.map((service) => service.slug);
}

export async function getRelatedServices(
  currentSlug: string,
  category: string
): Promise<Service[]> {
  const services = await getServices();
  return services
    .filter(
      (service) => service.slug !== currentSlug && service.category === category
    )
    .slice(0, 3);
}

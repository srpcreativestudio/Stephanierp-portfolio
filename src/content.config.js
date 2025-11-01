import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        altText: z.string(),
    }),
  });

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        altText: z.string(),
        type: z.string(),
        icons: z.array(z.string()).optional(),
        marketing: z.array(z.string()).optional(),
        liveLink: z.string(),
        githubLink: z.string().optional(),
    }),
  });

  const about = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
    schema: z.object({
      header: z.string(),
      title: z.string(),
    }),
  });

  const legal = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  
  });

export const collections = { services, projects, about, legal };


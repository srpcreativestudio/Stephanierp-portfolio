import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';


const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        altText: z.string(),
        type: z.string(),
        icons: z.array(z.string()).optional(),
        liveLink: z.string(),
        githubLink: z.string().optional(),
    }),
  });

export const collections = { projects };

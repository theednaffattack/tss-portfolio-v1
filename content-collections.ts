import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    publishedAt: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const recipes = defineCollection({
  name: "recipes",
  directory: "src/recipes",
  include: "*.mdx",
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    content: z.string(),
    heroImage: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, recipes],
});

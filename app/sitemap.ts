import { MetadataRoute } from "next";
import { posts } from "#site/posts";
import { getAllTags, sortTagsByCount } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://minecraftutilities.github.io/${post.slug}`,
    lastModified: post.date,
    priority: 0.6,
  }));

  function replaceTagSpace(tag: string) {
    const modifiedTag = tag.replace(" ", "-");
    return modifiedTag;
  }

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const tagsEntries: MetadataRoute.Sitemap = sortedTags.map((tag) => ({
    url: `https://minecraftutilities.github.io/tags/${replaceTagSpace(tag)}`,
    priority: 0.4
  }));

  return [
    {
      url: `https://minecraftutilitie.github.io/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://minecraftutilitie.github.io/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `https://minecraftutilitie.github.io/invite`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `https://minecraftutilitie.github.io/faq`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `https://minecraftutilitie.github.io/roadmap`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://minecraftutilitie.github.io/EULA`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `https://minecraftutilitie.github.io/terms`,
      lastModified: new Date(),
      priority: 0.6,
    },
    ...postsEntries,
    ...tagsEntries,
  ];
}
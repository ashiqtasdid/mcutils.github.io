import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Post } from "#site/posts"
import { slug } from "github-slugger"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(input: string) {
  return new Date(input).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function sortPost(posts: Array<Post>) {
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getAllTags(posts: Array<Post>){
  const tags: Record<string, number> = {}
  posts.forEach(post=> {
    post.tags?.forEach( tag => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    })
  })

  return tags;
}

export function sortTagsByCount(tags: Record<string, number>){
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string){
  return posts.filter(post => {
    if(!post.tags) return false;
    const slugifiedTags = post.tags.map(tag => slug(tag));

    return slugifiedTags.includes(tag);
  });
}
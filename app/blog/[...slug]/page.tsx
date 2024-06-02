import React from "react";
import { posts } from "#site/posts";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-component";
import { Metadata } from "next";
import Nav from "@/components/local/Nav";
import { Tag } from "@/components/local/tag";
import { formatDate } from "@/lib/utils";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParam(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParam(params);
  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Ashiq Tasdid", url: "https://mcutils.github.io" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParam(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div>
      <Nav />
      <article className="container prose pt-32">
        <h1 className="dark:text-white text-black">{post.title}</h1>
        <div className="flex gap-2 mb-2 -my-6">
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <h2 className="-my-4 dark:text-white">
          {post.description ? <p>{post.description}</p> : null}
        </h2>
        {/* author */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Author: {post.author}, Posted On: {formatDate(post.date)}
        </p>
        <hr className="my-4" />
        <div className="dark:text-white">
          <MDXContent code={post.body} />
        </div>
      </article>
    </div>
  );
}

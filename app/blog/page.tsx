import { posts } from "#site/posts";
import Post from "@/components/local/Post";
import { QueryPagination } from "@/components/local/query-pagination";
import { getAllTags, sortPost, sortTagsByCount } from "@/lib/utils";
import { useMemo } from "react";
import Nav from "@/components/local/Nav";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/local/tag";

const POST_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const currentPage = useMemo(
    () => Number(searchParams?.page) || 1,
    [searchParams]
  );
  const sortedPosts = useMemo(
    () => sortPost(posts.filter((post) => post.published)),
    []
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedPosts.length / POST_PER_PAGE),
    [sortedPosts.length]
  );

  const displayPosts = useMemo(
    () =>
      sortedPosts.slice(
        POST_PER_PAGE * (currentPage - 1),
        POST_PER_PAGE * currentPage
      ),
    [currentPage, sortedPosts]
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div>
      <Nav />
      <div className="container mx-auto p-4 pt-24 grid grid-cols-1 sm:grid-cols-12 gap-4">
        <div className="sm:col-span-8">
          <div className="mx-auto">
            <div className="text-4xl font-black mt-3">Blog</div>
            <div className="text-zinc-700 dark:text-zinc-400">
              Updates & Announcments about the discord bot
            </div>
          </div>
          <hr className="my-4" />
          {displayPosts.length > 0 ? (
            <ul className="space-y-4">
              {displayPosts.map((post) => {
                const { slug, title, description, date } = post;
                return (
                  <li key={slug} className="flex-col">
                    <div className="p-4">
                      <Post
                        slug={slug}
                        title={title}
                        description={description}
                        date={date}
                        tags={post.tags}
                      />
                    </div>
                    <hr className="my-4" />
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="text-center text-gray-500">There are no posts</div>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="flex justify-center mt-8"
          />
        </div>
        <div className="sm:col-span-4 pt-5">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {sortedTags.map((tag) => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

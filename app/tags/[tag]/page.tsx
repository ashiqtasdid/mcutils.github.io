import { posts } from "#site/posts";
import Nav from "@/components/local/Nav";
import Post from "@/components/local/Post";
import { Tag } from "@/components/local/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface tagProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata( {params}:tagProps): Promise<Metadata>{
    const { tag } = params;
    return {
        title: tag,
        description: `Posts related to ${tag}`,
    }
}

export const generateStaticParams = () => {
    const tags = getAllTags(posts);
    const paths = Object.keys(tags).map(tag => ({tag: slug(tag)}));
    return paths;
}

export default function TagPage({ params }: tagProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostsByTagSlug(posts, tag);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div>
      <Nav />
      <div className="container mx-auto p-4 pt-24 grid grid-cols-1 sm:grid-cols-12 gap-4">
        <div className="sm:col-span-8">
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
        </div>
        <div className="sm:col-span-4 pt-5">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {sortedTags.map((t) => (
                <Tag
                  tag={t}
                  key={t}
                  count={tags[t]}
                  current={slug(t) === tag}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

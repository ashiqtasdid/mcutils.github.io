import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tag } from "./tag";
import { Calendar as CalendarIcon } from "lucide-react";

interface PostProps {
  title: string;
  description?: string;
  slug: string;
  date: string;
  tags?: Array<string>;
  author?: string;
}

const Post = ({ slug, title, description, date, tags, author }: PostProps) => {
  return (
    <article>
      <div>
        <h2 className="flex space-x-3">
          <Link className="text-3xl font-semibold" href={"/" + slug}>
            {title}
          </Link>
          <Badge className="hidden md:flex">
            <CalendarIcon className="w-4 h-4" />
            <p className="pt-0.5">
              {" "}
              <span className="pt-4 pl-1">{formatDate(date)}</span>
            </p>
          </Badge>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="text-md py-3 text-zinc-700 dark:text-zinc-400 w-full md:w-2/3">
        {description}
      </div>
      <div>
        <CalendarIcon className="w-4 h-4 inline-block" />
        <p className="text-zinc-700 dark:text-zinc-400 inline-block pl-2 pt-0.5">
          {formatDate(date)}
        </p>
      </div>
    </article>
  );
};

export default Post;

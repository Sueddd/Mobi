import Link from "next/link";
import OneItem from "./_component/oneItem";
import { Button } from "@/components/ui/button";
import { getSortedPostsData } from "@/lib/posts";

const Blog = () => {
  const posts = getSortedPostsData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">
        📍 MarkDown Blog Practice
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <OneItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default Blog;

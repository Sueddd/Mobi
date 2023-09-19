import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from "@/types";
import { fetchData } from "@/api";

export default function PortfolioPage() {
  const router = useRouter();
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data: Post[] = await fetchData();
      setPostList(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {postList.map((v) => (
        <>
          <h3>TITLE </h3>
          <h2
            onClick={() => {
              router.push({
                pathname: "/portfolio/[pid]",
                query: { pid: v.id },
              });
            }}
          >
            {v.title}
          </h2>
          <br />
        </>
      ))}
    </>
  );
}

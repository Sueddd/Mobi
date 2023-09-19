import { fetchData } from "@/api";
import Post from "@/types";
import { useEffect, useState } from "react";

export function usePost(pid?: string) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data: Post[] = await fetchData();
      if (pid !== undefined) {
        setPostList(data.filter((v) => v.id == Number(pid)));
      }
      setPostList(data);
    };
    fetchPosts();
  }, [pid]);
  return postList;
}

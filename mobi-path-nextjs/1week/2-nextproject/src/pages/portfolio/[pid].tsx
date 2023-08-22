import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Post, fetchData } from "..";
import { useRouter } from "next/router";

export default function ChangeRoute() {
  const router = useRouter();
  const { pid } = router.query;
  console.log("내용", pid);
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data: Post[] = await fetchData();
      // pid를 string으로 인식해서 계속 빨간줄 => Number로 감싸줌 
      setPostList(data.filter((v) => v.id == Number(pid)));
    };
    fetchPosts();
  }, []);
  console.log(postList);
  return (
    <>
      {postList.map((v) => (
        <>
          <h2>
            id: {v.id}
            <div>{v.title}</div>
          </h2>
          <h3>{v.body}</h3>
        </>
      ))}
    </>
  );
}

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Post from "@/types";
import { fetchData } from "@/api";
import { usePost } from "@/hooks/usePost";

export default function ChangeRoute() {
  const router = useRouter();
  const { pid } = router.query;
  // const postId = Array.isArray(pid) ? pid[0] : pid;
  const postList = usePost(pid);

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

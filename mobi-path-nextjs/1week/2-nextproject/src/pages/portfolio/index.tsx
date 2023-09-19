import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from "@/types";
import { fetchData } from "@/api";
import { usePost } from "@/hooks/usePost";

export default function PortfolioPage() {
  const router = useRouter();
  const postList = usePost();

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

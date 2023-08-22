import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PortfolioPage from "./portfolio";

// 타입 설정을 위해 인터페이스 생성
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// fetch를 거쳐도 리턴은 프로미스 타입으로 반환 
export const fetchData = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // SSR 설정
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button
        onClick={() => {
          router.push({
            pathname: "/portfolio",
          });
        }}
      >
        게시글 보러 이동하기
      </button>
    </div>
  );
}


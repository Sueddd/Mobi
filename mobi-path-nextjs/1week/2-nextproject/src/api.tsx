import Post from "./types";

// fetch를 거쳐도 리턴은 프로미스 타입으로 반환
export const fetchData = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // SSR 설정 
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

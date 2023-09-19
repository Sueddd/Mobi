import { useRouter } from "next/router";

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

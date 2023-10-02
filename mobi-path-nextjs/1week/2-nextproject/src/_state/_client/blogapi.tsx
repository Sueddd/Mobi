import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "pages/blog/index");

export const getAllPostData = () => {
  // readdirSync를 사용해 postDirectory에 있는 마크다운 모든 파일의 이름을 가져와 배열로 변환
  const posts = readdirSync(postsDirectory).map((file) => {
    // readFileSync는 파일의 데이터를 가져온다.
    const post = readFileSync(`${postsDirectory}/${file}`, "utf-8");
    // matter()함수를 사용해 각 파일의 내용을 파싱한다.
    return matter(post).data;
  });
  return posts;
};

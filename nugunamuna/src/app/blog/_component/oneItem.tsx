import BlogPost from "../_types/types";

type Props = {
  post: BlogPost;
};

export default function OneItem({ post }: Props) {
  const { id, title, date, content } = post;

  return (
    <li key={id}>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-[25px]">
        {title}
      </h3>
      <p className="ml-0.5 mt-[5px] ">{date}</p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">{content}</blockquote>
    </li>
  );
}

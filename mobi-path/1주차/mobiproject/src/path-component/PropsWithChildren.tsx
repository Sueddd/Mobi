import { PropsWithChildren } from "react";

// 일반 children을 사용하면 props로 children을 내려주고 children 타입을 설정해 주어야 한다.
// children은 컴포넌트의 JSX 태그 사이에 위치한 내용을 가르킴
type ContainerProp = {
  children: React.ReactNode;
};

export const ChildrenWrapper = ({ children }: ContainerProp) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

// PropsWithChildren은 children을 optional하게 사용할 수 있고, 타입은 ReactNode로 고정
// children의 타입을 ReactNode로 주던 걸 생략 가능하다

export const PropsWithChildrenWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

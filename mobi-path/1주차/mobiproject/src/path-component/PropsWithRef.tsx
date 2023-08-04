// PropsWithRef는 타입스크립트에서 컴포넌트의 props 타입을 정의할 때,
// ref 속성을 갖는 컴포넌트에 사용하는 타입이다.

import { useEffect, useRef } from "react";

// PropsWithRef를 사용하면 컴포넌트의 props 타입에 ref 속성을 명시할 수 있다.
interface InputProps
  extends PropsWithRef<
    // PropsWithRef를 활용해 ref 속성 추가
    // html 태그 이름과 일치하게 "input"이라고 설정, input요소에 대한 PropsWithRef 설정
    "input",
    {
      value: string;
      onChange: (value: string) => void;
    }
  > {
  type: string;
}

const MyInput = (props: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input {...props} ref={inputRef} />;
};

// 막상 써놨는데 이해가 잘 안되서 다시 복습 예정

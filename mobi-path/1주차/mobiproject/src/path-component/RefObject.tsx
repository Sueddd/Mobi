// RefObject
// React의 ref 속성과 함께 사용되는 타입
// ref 속성은 React 엘리먼트의 실제 DOM 노드나 컴포넌트 인스턴스를 참조할 때 사용

import React from "react";

// RefObject는 이러한 참조를 관리하는 객체
const ObjectRefWrapper = () => {
  // useRef 함수를 통해 inputRef 객체 생성
  // 이 객체를 input 엘리먼트의 ref 속성에 전달
  // inputReft는 HTMLInputElement 타입의 RefObject 인스턴스 참조, 초기값은 null로 설정
  const inputRef = React.useRef<HTMLInputElement>(null);

  // handleClick 함수에서 inputRef.current로 해당 input 엘리먼트의 참조를 가져와 포커스 설정
  // 이때 inputRef의 타입은 RefObject<HTMLInputElement>이다.
  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
export default ObjectRefWrapper;

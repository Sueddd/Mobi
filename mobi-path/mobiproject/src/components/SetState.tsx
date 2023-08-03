import { useState, Dispatch, SetStateAction } from "react";

// SetStateAction은 useState 훅에 의해 생성된 setter함수의 인수로 사용된다.
// 즉, SetStateAction은 state의 타입을 제한해준다.
// Dispatch은 useState훅이 반환하는 값 중 하나가 state와 setState 함수를 담은 배열이기 때문이다.
// 디스패치는 상태 값을 업데이트하는 함수를 실행하기 위한 함수 타입을 정의한다.
interface LowerProps {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  //   setWord: (word: string) => string;
}

const Lower = ({ word, setWord }: LowerProps) => {
  const handleClick = () => {
    setWord("hello");
  };
  return (
    <div>
      <button onClick={handleClick}>클릭하면 글자 변경</button>
      <p>{word}</p>
    </div>
  );
};

function SetStateWrapper() {
  const [word, setWord] = useState("");
  return (
    <>
      <Lower word={word} setWord={setWord}></Lower>
    </>
  );
}
export default SetStateWrapper;

// setState 상태 관리 메소드는 React.Dispatch<SetStateAction<type>> 형식을 사용

// 함수의 타입은 반환하는 값이 있을 경우 () => {} 형식으로 표현하고, 반환하는 값이 없을 경우 () => void 형식으로 표현한다. setState 메소드의 경우에는 react 라이브러리의 Dispatch, SetStateAction 메소드를 호출하여 사용할 수 있다.

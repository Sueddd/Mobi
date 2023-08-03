import React, { PropsWithChildren } from "react";
import "./App.css";
import SetStateWrapper from "./components/SetState";

type WrapperProp = {
  name: string;
  age: number;
};

type ContainerProp = {
  children: React.ReactNode;
};

function App() {
  // let [user, setUser] = useState("kim");

  return (
    <>
      <Wrapper name="시소" age={23} />
      <NodeWrapper></NodeWrapper>
      <Container>여기는 일반 children을 써봤어</Container>
      <ChangeContainer>여기는 PropsWithChildren을 써봤어</ChangeContainer>
      <RefWrapper />
      <SetStateWrapper />
    </>
  );
}
// SetStateAction

// ReactElement는 리턴값으로 JSX 문법을 써야함
function Wrapper(props: WrapperProp): React.ReactElement {
  const text = `나는 ${props.name} 나이는 ${props.age}`;
  return <div>{text}</div>;
}

// ReactNode는 리턴 값으로 string, 원시타입을 줄 수도 있음
function NodeWrapper(): React.ReactNode {
  return "안녕";
}

// children 타입 정의 > ReactNode로
const Container = ({ children }: ContainerProp) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

// PropsWithChildren > children을 optional하게 사용할 수 있고, 타입은 ReactNode
// children의 타입을 ReactNode로 주던 걸 생략 가능
const ChangeContainer = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

// RefObject
// React의 ref 속성과 함께 사용되는 타입
// ref 속성은 React 엘리먼트의 실제 DOM 노드나 컴포넌트 인스턴스를 참조할 때 사용
// RefObject는 이러한 참조를 관리하는 객체
const RefWrapper = () => {
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

export default App;

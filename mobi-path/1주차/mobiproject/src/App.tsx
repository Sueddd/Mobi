import React from "react";
import "./App.css";
import SetStateWrapper from "./path-component/SetState&dispatch";
import ReactNodeWrapper from "./path-component/ReactNode";
import ReactElementWrapper from "./path-component/ReactElement";
import {
  ChildrenWrapper,
  PropsWithChildrenWrapper,
} from "./path-component/PropsWithChildren";
import ObjectRefWrapper from "./path-component/RefObject";
import { ReactFCwrapper } from "./path-component/React.Fc";

function App() {
  return (
    <>
      <ReactNodeWrapper />
      <ReactElementWrapper
        title="ReactElement"
        discription="ReactNode와는 달리 원시타입을 허용하지 않고 jsx 문법만"
      />

      <PropsWithChildrenWrapper>
        <ChildrenWrapper>여기는 일반 children 문법을 써봤어</ChildrenWrapper>
      </PropsWithChildrenWrapper>
      <ObjectRefWrapper />
      <SetStateWrapper />
      <ReactFCwrapper name="React.FC 사용하기"></ReactFCwrapper>
    </>
  );
}

export default App;

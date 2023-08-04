// ReactNode는 React에서 사용되는 타입스크립트 타입 중 하나이다.
// type ReactNode = ReactChild | ReactFragment | ReactProtal | boolean | null | undefined
// ReactNode 타입은 jsx 내에 사용할 수 있는 모든 요소의 타입을 말한다.
// 즉 string, null, undefined 등을 포함하는 가장 넓은 범위를 갖는 타입이다.
// ReactNode 타입은 클래스 컴포넌트의 render 함수가 기본적으로 리턴하는 타입이기도 하다.

function ReactNodeWrapper(): React.ReactNode {
  return "ReactNode는 리턴값으로 string을 줄 수도 있습니다";
}
export default ReactNodeWrapper;

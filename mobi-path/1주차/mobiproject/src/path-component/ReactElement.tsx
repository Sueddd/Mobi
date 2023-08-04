// ReactElement는 createElement 함수를 통해 생성된 객체 타입이다.
// ReactNode가 ReactElement를 포함하고 있고, ReactNode 와 달리
// 원시타입을 허용하지 않고 완성된 jsx 요소만을 허용한다.

type WrapperProp = {
  title: string;
  discription: string;
};

function ReactElementWrapper(props: WrapperProp): React.ReactElement {
  const text = `${props.title} 사용해봤는데  ${props.discription} 줄 수 있습니다. `;
  return <div>{text}</div>;
}

export default ReactElementWrapper;

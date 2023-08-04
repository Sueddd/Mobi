// FC란?
// FunctionComponent 타입의 줄임말
// React + Typescript 조합으로 개발할 때 사용하는 타입
// 함수형 컴포넌트 사용시 타입 선언에 쓸 수 있도록 React에서 제공하는 타입

// 함수형 컴포넌트로 넘어오면서 쓰게 된 타입인데, 여러 문서에서는 FC 타입의 사용을 권장하지 않는다.
// props 및 컴포넌트의 반환 타입을 더 명확하게 지정 가능
interface AppProps {
  name: string;
}

// 인자 props의 타입인 AppProps를 props 옆에 붙이지 않고 React.FC 옆에 붙인다.
// React.FC를 사용하여 Props 타입이 ReactFCwrapper 컴포넌트에 전달되는 타입임을 나타낸다.
// React.FC는 반환 타입이 JSX.Element | null임을 암시한다.

export const ReactFCwrapper: React.FC<AppProps> = (props) => {
  return <div> {props.name}</div>;
};

ReactFCwrapper.defaultProps = {
  name: "default 값이에요",
};

// -----------------------------------------------
// React.FC 사용을 지양해야 하는 이유 & 다시 사용할 수 있는 이유

// 1. children
// React.FC를 사용하면 props에 기본적으로 children이 들어가있다는 것.
// children의 타입을 유추할 수 없기 때문에 원치않는 에러를 발생시킬 수 있었다.
// 그렇기 때문에 공식 문서에서도 React.FC 사용을 지양하라고 나왔지만, React 18 버전에서는 React.FC를 사용할 때 children의 타입 추론 문제를 해결하여 이제는 React.FC를 사용해도 불편함이 적어져서 사용 가능하다고 볼 수 있다.

// 2. 제네릭을 지원하지 않는다.
// React16.8 이전에는 제네릭을 지원하지 않았기 때문에, 프로퍼티 타입이 명확하게 정의되지 않을 수 있어서 문제가 있을 수 있었지만 최신 버전에서는 이러한 문제가 해결되고 이제 React.FC를 사용해 제네릭 타입을 지정할 수 있다.

// 3. defaultProps 속성이 적용되지 않는다.
// 기존의 React.FC는 defaultProps 설정이 불가능했다.
// 일반형 함수만 defaultProps 설정이 가능했기 때문에 이또한 React.FC 지양 이유 중 하나였는데 이 문제도 해결 되어 위의 예시처럼 Reac.FC에서도 defaultProps 설정이 가능하다.

// ** React.FC를 사용할 수 없는 환경
// 1. 대부분의 React환경에서 React.FC를 사용할 수 있지만, 타입스크립트를 지원하지 않는 환경에서는 React.FC를 사용할 수 없다.
// Preact를 사용하는 프로젝트를 생성하면, 타입스크립트를 사용할 수는 있지만 React.FCF를 사용할 수는 없다. 이 경우 일반적 함수 컴포넌트를 사용하면 문제 없이 작동한다.

// Preact : create-react-app에서 --templatecra-templete-preact 옵션을 사용해 생성

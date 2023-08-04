// 1. interface와 type alias는 둘다 타입에 이름을 부여해주는데, type alias는 모든 타입에 가능, interface는 오직 객체 타입에만 가능

interface Iexpression {
  name: string;
  age: number;
}

// interface Expression2 = "희수"  > error

type Texpression = {
  name: string;
  age: number;
};

type Texpression2 = "희수"; // 정상 작동
type Texpression3 = string; // 정상 작동
type Texpression4 = number; // 정상 작동

export function TypeEx(
  props: Texpression | Texpression2 | Texpression3 | Texpression4
) {
  return (
    <>
      <div>{props.name}</div>
    </>
  );
}

// 2. type alias가 interface를 대체할 수 있는데 왜 두개다 사용하는가?
// interface는 확장이 가능하다.

interface Iexpression {
  text: "추가";
} // 위에서 만든 Iexpression이라는 이름으로 다른 프로퍼티를 가진 타입 선언을 해줬는데 에러가 나지 않고, 나중에 선언된 타입의 프로퍼티를 가지고 있다.
// 이는 typealias에는 에러가 난다.

export function App() {
  return <InterfaceEx name="hehe" age={22} text="추가"></InterfaceEx>;
}

export function InterfaceEx(props: Iexpression) {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.text}</div>
    </>
  );
}

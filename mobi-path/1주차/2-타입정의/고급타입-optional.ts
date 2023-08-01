// 타입스크립트는 타입에 엄격해, 객체 프로퍼티의 타입을 정의했으나 값을 할당하지 않는 경우 에러가 발생한다.
// 이러한 경우 선택적 프로퍼티 > optional property 문법을 사용해 해결할 수 있다.
// 옵셔널 프로퍼티로 구현된 프로퍼티는 값을 할당하지 않아도 문제가 없다.

// * optional property
interface companyInfo {
  name: string;
  chairman: string;
}

// 이렇게 하면 chairman이라는 속성이 없어서 오류
// let obj: companyInfo = {
//   name: "facebook",
// };

interface changeInfo {
  name: string;
  chairman?: string;
}

// 오류 발생 x > chairman에 ?를 붙히면서 옵셔널 프로퍼티로 구현
let obj: changeInfo = {
  name: "facebook",
};

// * optional chaning
// 옵셔널 체이닝은 프로퍼티의 타입이 null 또는 undefined가 올 수 있는 경우 사용된다.
interface companyInfo2 {
  naming: string | null | undefined;
}

let obj2: companyInfo2 = {
  naming: "facebook",
};

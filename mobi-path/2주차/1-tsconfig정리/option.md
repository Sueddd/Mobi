1. files
   프로젝트에서 컴파일할 파일들의 목록을 명시적으로 지정하는 속성이다.
   files 속성은 밑의 exclude보다 우선순위가 높다. 만일 이 속성이 생략되면 include와 exclude속성으로 컴파일 대상을 결정한다.

{
"files" : [ // 파일 확장자까지 정확히 작성해줘야 한다.
"src/main.ts",
"src/utils.ts",
"src/types.d.ts"
]
}

//---------------------------------------------------------------------

2. extends
   extends는 다른 tsconfig.json 파일의 설정들을 가져와 재사용할 수 있게 해주는 옵션이다. 보통 extends 속성은 tsconfig.json 파일의 최상위에 위치한다.
   예를들어 config/base.json 파일의 속성 설정을 현 tsconfig.json 파일에 포맷이 맞으면 base파일의 설정을 상속 받게 된다.

// config/base.json
{
"compilerOptions" :{
"noImplicitAny" : true,
"strictNullChecks": true
}
}

{
"extends": "./configs/base",
"compilerOptions:{
"stricNullChecks":false
},
"files": [
"src/main.ts",
"src/utils.ts",
"src/types.d.ts"
]
}

//---------------------------------------------------------------------

3. include

include 속성은 files 속성과 같이 프로젝트에서 컴파일할 파일들을 지정하는 속성이지만, 와일드 카드 패턴으로 지정한다는 점에서 차이가 있다.
또한 include는 files 속성과는 달리 exclude보다 약해 include에 명시되어 있어도 exclude에도 명시되어 있으면 제외 되게 된다.

{
"compilerOptions" : {
...
},
"include":[
"src/*.ts", // src 디렉토리에 있는 모든 .ts파일
"dist/test?.ts", // dist 디렉토리에 있는 test1.ts, test2.ts, test3.ts ..등에 일치
"test/**/*.spect.ts" // test 디렉토리와 그 하위 디렉토리에 있는 모든 .spec.ts 파일
]
}

- 와일드 카드 패턴이란 tsconfig.json 파일에서 include나 exclude 속성에 사용할 수 있는 파일이나 디렉토리를 그룹화하여 일치시키는 기호라고 보면 된다.

- : 해당 디렉토리에 있는 모든 파일
  ? : 해당 디렉토리에 있는 파일들의 이름 중 한글자라도 포함하면 해당
  \*\* : 해당 디렉토리의 하위 디렉토리의 모든 파일을 포함

4. exclude

exclude 속성은 프로젝트에서 컴파일 대상에서 제외할 파일들을 와일드 카드 패턴으로지정하는 속성이다. 즉, include의 반대 버전이라고 보면 된다.

{
"compilterOptions":{
...
},

    "exclude": [
        "node_modules", // node_modules 디렉토리를 제외
        "**/*.test.ts" // 모든 .test.ts 파일을 제외
    ]

}

5. compilterOptions

컴파일 대상 파일들을 어떻게 변환할지 세세히 정하는 옵션이다.

{
"compilerOptions": {

    /* 기본 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "incremental": true,                   /* 증분 컴파일 활성화 */
    "target": "es5",                          /* ECMAScript 목표 버전 설정: 'ES3'(기본), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "esnext",                       /* 생성될 모듈 코드 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": ["dom", "dom.iterable", "esnext"], /* 컴파일 과정에 사용될 라이브러리 파일 설정 */
    "allowJs": true,                          /* JavaScript 파일 컴파일 허용 */
    "checkJs": true,                       /* .js 파일 오류 리포트 설정 */
    "jsx": "react",                           /* 생성될 JSX 코드 설정: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* '.d.ts' 파일 생성 설정 */
    "declarationMap": true,                /* 해당하는 각 '.d.ts'파일에 대한 소스 맵 생성 */
    "sourceMap": true,                     /* 소스맵 '.map' 파일 생성 설정 */
    "outFile": "./",                       /* 복수 파일을 묶어 하나의 파일로 출력 설정 */
    "outDir": "./dist",                    /* 출력될 디렉토리 설정 */
    "rootDir": "./",                       /* 입력 파일들의 루트 디렉토리 설정. --outDir 옵션을 사용해 출력 디렉토리 설정이 가능 */
    "composite": true,                     /* 프로젝트 컴파일 활성화 */
    "tsBuildInfoFile": "./",               /* 증분 컴파일 정보를 저장할 파일 지정 */
    "removeComments": true,                /* 출력 시, 주석 제거 설정 */
    "noEmit": true,                           /* 출력 방출(emit) 유무 설정 */
    "importHelpers": true,                 /* 'tslib'로부터 헬퍼를 호출할 지 설정 */
    "downlevelIteration": true,            /* 'ES5' 혹은 'ES3' 타겟 설정 시 Iterables 'for-of', 'spread', 'destructuring' 완벽 지원 설정 */
    "isolatedModules": true,                  /* 각 파일을 별도 모듈로 변환 ('ts.transpileModule'과 유사) */

    /* 엄격한 유형 검사 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "strict": true,                           /* 모든 엄격한 유형 검사 옵션 활성화 */
    "noImplicitAny": true,                 /* 명시적이지 않은 'any' 유형으로 표현식 및 선언 사용 시 오류 발생 */
    "strictNullChecks": true,              /* 엄격한 null 검사 사용 */
    "strictFunctionTypes": true,           /* 엄격한 함수 유형 검사 사용 */
    "strictBindCallApply": true,           /* 엄격한 'bind', 'call', 'apply' 함수 메서드 사용 */
    "strictPropertyInitialization": true,  /* 클래스에서 속성 초기화 엄격 검사 사용 */
    "noImplicitThis": true,                /* 명시적이지 않은 'any'유형으로 'this' 표현식 사용 시 오류 발생 */
    "alwaysStrict": true,                  /* 엄격모드에서 구문 분석 후, 각 소스 파일에 "use strict" 코드를 출력 */

    /* 추가 검사 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "noUnusedLocals": true,                /* 사용되지 않은 로컬이 있을 경우, 오류로 보고 */
    "noUnusedParameters": true,            /* 사용되지 않은 매개변수가 있을 경우, 오류로 보고 */
    "noImplicitReturns": true,             /* 함수가 값을 반환하지 않을 경우, 오류로 보고 */
    "noFallthroughCasesInSwitch": true,       /* switch 문 오류 유형에 대한 오류 보고 */

"noUncheckedIndexedAccess": true, /_ 인덱스 시그니처 결과에 'undefined' 포함 _/

    /* 모듈 분석 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "moduleResolution": "node",               /* 모듈 분석 방법 설정: 'node' (Node.js) 또는 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./",                       /* 절대 경로 모듈이 아닌, 모듈이 기본적으로 위치한 디렉토리 설정 (예: './modules-name') */
    "paths": {},                           /* 'baseUrl'을 기준으로 상대 위치로 가져오기를 다시 매핑하는 항목 설정 */
    "rootDirs": [],                        /* 런타임 시 프로젝트 구조를 나타내는 로트 디렉토리 목록 */
    "typeRoots": [],                       /* 유형 정의를 포함할 디렉토리 목록 */
    "types": [],                           /* 컴파일 시 포함될 유형 선언 파일 입력 */
    "allowSyntheticDefaultImports": true,     /* 기본 출력(default export)이 없는 모듈로부터 기본 호출을 허용 (이 코드는 단지 유형 검사만 수행) */
    "esModuleInterop": true,                   /* 모든 가져오기에 대한 네임스페이스 객체 생성을 통해 CommonJS와 ES 모듈 간의 상호 운용성을 제공. 'allowSyntheticDefaultImports' 암시 */
    "preserveSymlinks": true,              /* symlinks 실제 경로로 결정하지 않음 */
    "allowUmdGlobalAccess": true,          /* 모듈에서 UMD 글로벌에 접근 허용 */

    /* 소스맵 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "sourceRoot": "./",                    /* 디버거(debugger)가 소스 위치 대신 TypeScript 파일을 찾을 위치 설정 */
    "mapRoot": "./",                       /* 디버거가 생성된 위치 대신 맵 파일을 찾을 위치 설정 */
    "inlineSourceMap": true,               /* 하나의 인라인 소스맵을 내보내도록 설정 */
    "inlineSources": true,                 /* 하나의 파일 안에 소스와 소스 코드를 함께 내보내도록 설정. '--inlineSourceMap' 또는 '--sourceMap' 설정이 필요 */

    /* 실험적인 기능 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "experimentalDecorators": true,        /* ES7 데코레이터(decorators) 실험 기능 지원 설정 */
    "emitDecoratorMetadata": true,         /* 데코레이터를 위한 유형 메타데이터 방출 실험 기능 지원 설정 */

    /* 고급 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "skipLibCheck": true,                     /* 선언 파일 유형 검사 스킵 */
    "forceConsistentCasingInFileNames": true  /* 동일한 파일에 대한 일관되지 않은 케이스 참조를 허용하지 않음 */

}
}

▲ target :
target 프로퍼티는 TypeScript를 컴파일할 JavaScript 버전을 지정한다. 환경에 따라 낮은 버전이나 높은 버전을 선택할 수 있다. 기본값은 ES5이며, ES5에서 지원하지 않는 기능을 사용할 때 주의해야 한다. 대부분의 브라우저는 ES6를 지원하므로 주로 사용되며, target 프로퍼티는 lib 프로퍼티의 기본값을 결정한다. ESNext 옵션은 TypeScript 버전에 따라 달라질 수 있는 최신 자바스크립트 버전을 나타내므로 주의해야 한다.

"compilerOptions": {
"target": "ES6" // 어떤 버전의 자바스크립트로 컴파일 될 것인지 설정
// 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
}

▲ lib :
lib 옵션은 JavaScript 내장 라이브러리(예: Math API, document API)에 대한 타입 정의를 지정한다. lib 프로퍼티가 지정되지 않으면 target 프로퍼티에 따라 필요한 타입 정의 정보가 자동으로 지정된다. 예를 들면, ES6 이상의 target 프로퍼티가 설정되어 있지만 lib이 지정되지 않으면 자동으로 필요한 라이브러리 타입(예: ES2015)이 전역 참조에 포함된다.

- lib 프로퍼티를 지정하지 않을 때 자동으로 설정되는 값은 다음과 같다.

* target이 es3이면 디폴트로 lib.d.ts를 사용
* target이 es5이면, 디폴트로 dom, es5, scripthost를 사용
* target이 es6이면, 디폴트로 dom, es6, dom.iterable, scripthost를 사용

"compilerOptions": {
"lib": ["es5", "es2015.promise", "dom"], // 컴파일 과정에 사용될 라이브러리 파일 설정
/_
es5: global type을 사용하기 위함 (Array, Boolean, Function 등..)
es2015.promise: Promise를 사용하기 위함
dom: setTimeout, console.log 등 dom에서 지원해주는 기능들을 사용하기 위함
_/
}

▲ experimentalDecorators / emitDecoratorMetadata

타입스크립트의 @Decorator를 사용하기 위해서는 true로 둬야 작동된다.

"compilerOptions": {
"experimentalDecorators": true /_ ES7 데코레이터(decorators) 실험 기능 지원 설정 _/
"emitDecoratorMetadata": true /_ 데코레이터를 위한 유형 메타데이터 방출 실험 기능 지원 설정 _/
}

\*\* 이런식으로 @Decorator 사용
function methodDecorator() {
console.log('method');
return function (target: any, property: any, descriptor: any) {};
}

function propertyDecorator(writable: boolean = true) {
console.log('property');
return function (target: any, decoratedPropertyName: any): any {};
}

class Test {
@propertyDecorator()
property = 'property';

@methodDecorator()
test(param1: string) {
console.log('test1');
}
}

▲ jsx

.tsx 확장자의 컴파일 결과 JSX 코드를 어떻게 컴파일 할지 결정한다.

react : .js파일로 컴파일 된다. (JSX 코드는 React.createElement() 함수의 호출로 변환됨)
react-jsx : .js파일로 컴파일 된다. (JSX 코드는 \_jsx()함수의 호출로 변환됨)
react-jsdev : .js파일로 컴파일 된다. (JSX 코드는 \_jsx()함수의 호출로 변환됨)
preserve : .jsx 파일로 컴파일 된다. (JSX 코드가 그대로 유지됨)
react-native : .js 파일로 컴파일 된다. (JSX 코드가 그대로 유지됨)

"compilerOptions": {
"jsx": "preserve" // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
}

// --------------------------------------------------------------

※ Modules 옵션

▲ rootDir
루트 디렉토리 기준을 변경한다. js 아웃풋 경로에 영향을 줄 수 있다.

▲ module / moduleResolution

프로그램에서 사용할 모듈 시스템을 결정한다.
만일 import 구문을 es6로 컴파일 했을 때, 동일하게 import로 컴파일되어 commonJS 환경의 node로 실행시 오류가 발생할 수도 있다.

따라서 import 구문을 require 구문으로 컴파일을 해줘야할 때 module의 속성값을 comonJS로 지정하면 된다.

CommonJS (target 프로퍼티가 ES3 혹은 ES5로 지정되었을 때의 기본값)
ES6/ES2015 (target 프로퍼티가 ES6 혹은 그 이상의 버전으로 지정되었을 때의 기본값)
나머지 (ES2020, ESNext, AMD, UMD, System, None)

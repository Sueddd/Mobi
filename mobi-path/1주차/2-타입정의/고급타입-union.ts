// union => 자바스크립트의 OR 연산자와 같은 역할 

let unionExam : string | number = 12; // string or number가 변수에 들어올 수 있다.
unionExam = "안녕"


function exam(param : string | number) {
    // 함수의 파라미터로 string or number 타입이 들어올 수 있다. 
}
exam(12);
exam("안녕")


function getAge(age : number | string){
    if(typeof age === "number"){
        return age.toFixed; // 반올림 
    }
    else if (typeof age === 'string'){
        return age;
    }
    return new TypeError('age must be number or string');
}

getAge(12345.6789) // 12346
getAge("안녕") // "안녕"
// getAge([1,2,3]) => return 'age must be number or string'

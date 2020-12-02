# 기본적인 타입

---

```typescript

// 참, 거짓
let isDone: boolean = false;			//Boolean

// 숫자
let count: number = 6;					//number

// 문자열
let color: string = "blue";				//string "" '' ``
let str: string = `Today I had a meal.`

// 배열
let list: number[] = [1, 2, 3];			//array []
let list: Array<number> = [1, 2, 3];	//array <>

//튜플
let x: [string,number];
x = ["hello",10];	//초기화 성공
x = [10,"hello"];	//초기화 실패

//열거
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}	// 1부터 번호매김
enum Color {Red = 1, Green = 5, Blue = 9}	// 수동으로 번호매김
let colorName: string = Color[5];	// colorName = 'Green'

// Any
// 타입검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과시킴.
let notSure: any = 4;
notSure = "maybe I want to go home.";
notSure = false;

let notSure: any = 4;
notSure.ifItExists();	// 성공
notSure.toFixed();		// 성공
let prettySure: Object = 4;
prettySure.toFixed();	// 오류 : 프로퍼티 'toFixed' Object에 존재하지 않음.

let list: any[] = [1, true, "free"];
list[1] = 100;	// good

// Void
// 어떤 타입도 존재할 수 없음을 나타냄.
// any의 반대타입
function warnUser(): void {
    console.log("This is my warning message.");
}

// null 또는 undefined 만 할당가능
let unusable: void = undefined;
unusable = null;	// 성공

// Null and Undefined
// 자체로 유용한 경우는 없음.
let u: undefined = undefined;
let n: null = null;
// 예외적으로 undefined 는 void 에 할당 가능하다.

// Never
// 절대 발생할 수 없는 타입.

// 함수의 마지막에 도달할 수 없음.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론됨.
function fail() {
    return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없음.
function infinitelLoop(): never {
    while(true) {
        
    }
}

// 객체

declare function create(o: object | null): void;
create({ prop: 0 });	// good
create(null);	// good

create(42);	// bad
create("string");	// bad
create(false);	// bad
create(undefined);	// bad

// 타입 단언
// 개발자가 Typescript 보다 더 잘 알고있을 때 사용
// 특별한 검사, 데이터 재구성 안함.
// '날 믿어. 난 내가 뭘 하고 있는지 알아' 라는 말을 해주는 것과 유사

let someValue: any = "this is a string";

// angle-bracket
let strLength: number = (<string>someValue).length;
// as
let strLength: number = (someValue as string).length;








```


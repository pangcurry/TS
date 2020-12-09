# Interface

---

```typescript

// interface 사용 전
function printLabel(labeledObj: {label: string}) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10"};
printLabel(myObj);

// interface 사용 후
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 선택적 프로퍼티
// 끝에 ? 를 붙인다. 이점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용가능한 속성을 기술하는 것이다.
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});


// 읽기전용 프로퍼티
// 객체 리터럴을 할당한 후에는 수정할 수 없다.
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 20};
p1.x = 5;	// error

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;			// error
ro.push(5);			// error
ro.length = 100;	// error
a = ro;			    // error

// 타입단언으로 오버라이드 가능
a = ro as number[];

// readonly vs const
// 변수: const
// 프로퍼티: readonly

// 초과 프로퍼티 검사
// 밑 코드에서 colour 라고 작성한 경우, width 프로퍼티 있고, color 프로퍼티 없고, colour 프로퍼티는 중요하지 않으므로 올바르게 작성된 것으로 간주 될 수 있었으나 typescript 에서는 초과 프로퍼티 검사를 받는다.
// 만약 대상 타입이 갖고 있지 않은 프로퍼티를 갖고 있으면, 에러가 발생한다.
interface testsquare {
    color?: string;
    width?: number;
}

function create(config: testsquare): {color: string; area: number} {
    // ........
}

// error - colour 오타
let mysquare = create({ colour: "red",width: 100 });

// 검사를 피하는 방법 1: 타입단언을 사용
let mysquare = create({ width: 100 opacity: 0.5 } as testsquare);

// 검사를 피하는 방법 2: 다른 변수에 할당하여 전달
let squareOptions = { colour: "red", width: 100 };
let mySquare = create(squareOptions);

// interface와 squareOptions 사이에 공통 프로퍼티가 없다면 에러가 난다.
let squareOptions = { colour: "red" };
let mySquare = create(squareOptions);	//error

// 함수 타입
interface Searchfunc {
    (source: string, subtring: string): boolean;
}

let mySearch: Searchfunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

let 




```


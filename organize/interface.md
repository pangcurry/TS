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


// 읽기전용 프로퍼티
// 객체 리터럴을 할당한 후에는 수정할 수 없다.
interface Point {
    readonly x: number;
    readonly y: number;
}


```


//optional parameter
function add(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3)); //Output: 5

//default parameter/required parameter
const sub = function (a: number, b: number, c: number = 52): number {
    return a - b - c;
}
console.log(sub(5, 2)); //Output: 3

const mul = (a: number, b: number): number => a * b;
console.log(mul(2, 3)); //Output: 6

//rest parameter/ varargs
function addAll(a:string,...num: number[]): number {
    return a.length+num.reduce((a, b) => a + b);
}
console.log(addAll("1", 2, 3, 4, 5)); //Output: 15
console.log(addAll("1", ...[1,2,5,4,6])); //Output: 18

//generic function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
let output1 = identity(10);



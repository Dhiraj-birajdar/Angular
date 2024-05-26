let lname:string = "John";
console.log(lname.toUpperCase()); //Output: John

let num:number;
num = 2;
num = 2.0;
num = parseFloat("2.0");
console.log(num); //Output: 2

let flag:boolean = true;
console.log(flag); //Output: true

let words:Array<string>;
words = ["Hello", "World"];
let nums:number[];
nums = [1, 2, 3, 4, 5];
let ans = nums.filter((n) => n%2 == 0);
let word = words.find((w) => w==="Hello");
console.log(nums.reduce((a, b) => a+b));//Output: 15
console.log(ans); //Output: [2, 4]
console.log(word); //Output: Hello

const enum Color {
    Red,
    Green,
    Blue
}
let c:Color = Color.Red;

let tuple:[string, number] = ["Hello", 10];
function swap(a:number, b:number):[number, number] {
    return [b, a];
}

"use strict";
let lname = "John";
console.log(lname.toUpperCase()); //Output: John
let num;
num = 2;
num = 2.0;
num = parseFloat("2.0");
console.log(num); //Output: 2
let flag = true;
console.log(flag); //Output: true
let words;
words = ["Hello", "World"];
let nums;
nums = [1, 2, 3, 4, 5];
let ans = nums.filter((n) => n % 2 == 0);
let word = words.find((w) => w === "Hello");
console.log(nums.reduce((a, b) => a + b)); //Output: 15
console.log(ans); //Output: [2, 4]
console.log(word); //Output: Hello
let c = 0 /* Color.Red */;
let tuple = ["Hello", 10];
function swap(a, b) {
    return [b, a];
}
//# sourceMappingURL=datatype.js.map
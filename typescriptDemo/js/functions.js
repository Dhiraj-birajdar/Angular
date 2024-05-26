"use strict";
//optional parameter
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3)); //Output: 5
//default parameter/required parameter
const sub = function (a, b, c = 52) {
    return a - b - c;
};
console.log(sub(5, 2)); //Output: 3
const mul = (a, b) => a * b;
console.log(mul(2, 3)); //Output: 6
//rest parameter/ varargs
function addAll(a, ...num) {
    return a.length + num.reduce((a, b) => a + b);
}
console.log(addAll("1", 2, 3, 4, 5)); //Output: 15
console.log(addAll("1", ...[1, 2, 5, 4, 6])); //Output: 18
//generic function
function identity(arg) {
    return arg;
}
let output = identity("Hello");
let output1 = identity(10);
//# sourceMappingURL=functions.js.map
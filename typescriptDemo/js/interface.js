"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    id: 1,
    name: 'John'
};
let student = {
    id: 1,
    name: 'John',
    marks: 80
};
let { id: userId, name: userName } = {
    id: 1,
    name: 'John',
    marks: 80
};
let [s1, s2] = [
    { id: 1, name: 'John', marks: 80 },
    { id: 2, name: 'Paul', marks: 90 },
    { id: 3, name: 'Mark', marks: 85 }
];
console.log(userId, userName);
console.log(s1, s2);
//# sourceMappingURL=interface.js.map
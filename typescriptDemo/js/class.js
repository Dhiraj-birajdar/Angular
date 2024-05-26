"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// import * as UserLogin from './interface';
// UserLogin.Login
class Employee {
    constructor(name = "John") {
        _Employee_id.set(this, void 0); // private field
        __classPrivateFieldSet(this, _Employee_id, 10, "f");
        this.name = name;
    }
    get id() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set id(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getCompany() {
        return this.company;
    }
    getName() {
        return this.name + " " + __classPrivateFieldGet(this, _Employee_id, "f");
    }
    display() {
        console.log(`Name: ${this.name}, ID: ${__classPrivateFieldGet(this, _Employee_id, "f")}`);
    }
}
_Employee_id = new WeakMap();
Employee.company = "XYZ";
let emp = new Employee('Mark');
emp.id = 20; // setter
console.log(emp.id); // getter
emp.display();
console.log(Employee.getCompany());
// Inheritance
class Manager extends Employee {
    constructor(name) {
        super(name);
    }
    login() {
        return { id: 1, name: 'John' };
    }
    display() {
        console.log(`Address: ${this.address}`);
    }
}
let mgr = new Manager('Paul');
//# sourceMappingURL=class.js.map
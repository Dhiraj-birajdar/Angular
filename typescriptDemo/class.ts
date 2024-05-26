import { Login,Person } from './interface';
// import * as UserLogin from './interface';
// UserLogin.Login

class Employee{
    #id!: number; // private field
    private name: string;
    protected address!: string;
    static company: string = "XYZ";
    constructor(name: string = "John"){
        this.#id = 10;
        this.name = name;
    }
    get id(): number{
        return this.#id;
    }
    set id(id: number){ 
        this.#id = id;
    }

    static getCompany(): string{
        return this.company;
    }
    getName(): string{
        return this.name+" "+this.#id;
    }
    display(): void{
        console.log(`Name: ${this.name}, ID: ${this.#id}`);
    }
}

let emp = new Employee('Mark');
emp.id = 20; // setter
console.log(emp.id); // getter
emp.display();
console.log(Employee.getCompany());

// Inheritance
class Manager extends Employee implements Login{
    constructor(name: string){
        super(name);
    }
    login(): Person{
        return {id: 1, name: 'John'};
    }
    display(): void{
        console.log(`Address: ${this.address}`);
    }
}
let mgr = new Manager('Paul');



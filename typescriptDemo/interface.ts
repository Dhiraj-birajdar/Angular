export interface Person {
    id: number;
    name: string;
    age?: number;
}

let person: Person = {
    id: 1,
    name: 'John'
};

interface Student extends Person {
    marks: number;
}

let student: Student = {
    id: 1,
    name: 'John',
    marks: 80
};

export interface Login {
    login(): Person;
}

let {id:userId,name:userName}: Student = {
    id: 1,
    name: 'John',
    marks: 80
};

let [s1, s2]: Student[] = [
    { id: 1, name: 'John', marks: 80 },
    { id: 2, name: 'Paul', marks: 90 },
    { id: 3, name: 'Mark', marks: 85 }
]; 

console.log(userId, userName);
console.log(s1, s2);
export default class Person {
    name: string;
    surname: string;
    age: number;
    children: number;

    constructor(name: string, surname: string, age: number, children: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.children = children;
    }

    completeName(): string {
        return `${this.name} ${this.surname}`
    }

    toString() {
        return `name: ${this.name}. surname: ${this.surname}. age: ${this.age}. children: ${this.children}`;
    }
}

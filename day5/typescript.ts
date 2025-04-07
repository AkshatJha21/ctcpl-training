// DATA TYPES

let age: number = 22;
let nam3: string = "Akshat";
let isEmployee: boolean = true;
let hobbies: string[] = ['reading', 'playing'];
let scores: number[] = [34, 12, 11];

let id: number | string = 123;
id = "abc";
// id = false; boolean not assignable to id

// FUNCTIONS WITH RETURN & PARAMETER TYPES

function greet(name: string): string {
    return `Hello, ${name}`;
}

function addNum(a: number, b: number): number {
    return a + b;
}

function log(message: string, user?: string): void {
    console.log(user ? `[${user}] ${message}` : message);
}

// TYPE ALIASES: custom types

type User = {
    name: string;
    age: number;
    isAdmin?: boolean;
}

const user1: User = {
    name: "Jack",
    age: 22
}

// INTERFACES

interface UserProps {
    name: string;
    age: number;
    login(): void;
}

const user: UserProps = {
    name: "tom",
    age: 30,
    login() {
        console.log(`${this.name} logged in`);
    }
}

interface Admin extends User {
    accessLevel: number;
}

// CLASSES

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hi I am ${this.name}`);
    }
}

const p = new Person("Akshat");
p.greet();

// ACCESS MODIFIERS

class Car {
    private speed: number = 0;

    constructor(public brand: string) {}

    drive() {
        this.speed = 100;
        console.log(`${this.brand} speed: ${this.speed} kmph`);
    }
}

const car = new Car("Tesla");
car.drive();
// car.speed(); can't be accessed

// GENERICS

function identity<T>(value: T): T {
    return value;
}

let a = identity<string>("Hello");
let b = identity<number[]>([1,2,3]);

// ENUMS: named constants

enum Role {
    User,
    Admin,
    Manager
}

let userRole: Role = Role.Admin;


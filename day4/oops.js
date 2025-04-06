console.log("oops");

// procedural programming: code is structured as a sequence of instructions 
let name = "John";
let age = 25;

const printUser = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
};

printUser(name, age);

// object oriented programming: data and functions are combined into objects

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printUser() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const user1 = new User("Akshat", 21);
const user2 = new User("Jack", 22);

user1.printUser();
user2.printUser();
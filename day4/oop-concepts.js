console.log("ppp");

// encapsulation: bundling data and functions into one unit

class BankAccount {
    constructor (balance) {
        let _balance = balance; // pvt variable
    
        this.deposit = function (amount) {
            if (amount > 0) _balance += amount;
        };

        this.getBalance = function () {
            return _balance;
        };
    }
}

const account = new BankAccount(122);

account.deposit(500);

console.log(account.getBalance());

// abstraction: hiding complex logic

class CoffeeMachine {
    start() {
        this._boilWater();
        this._brewCoffee();
        console.log("Coffee is ready!");
    }

    _boilWater() {
        console.log("Boiling water...");
    }

    _brewCoffee() {
        console.log("Brewing coffee...");
    }
}

const nescafe = new CoffeeMachine();

nescafe.start();

// inheritance: inherit properties and methods from another class

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is speaking`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} is barking`);
    }
}

const dog = new Dog("Tommy");

dog.speak();

// polymorphism: same function name but different behaviors

class Mammal {
    speak() {
        console.log("Mammal speaks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

class Cow extends Animal {
    speak() {
        console.log("Cow moos");
    }
}

const animals = [new Cat(), new Cow(), new Mammal()];

animals.forEach(animal => animal.speak());
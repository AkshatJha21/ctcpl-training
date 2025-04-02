// objects: store related data as key-value pairs

const person = {
    name: "Akshat",
    age: 21,
    isOnline: true
};
console.log(person);

// dot notation
console.log(person.name);
// bracket notation
console.log(person['age']);
// dynamic key access
const key = "isOnline";
console.log(person[key]);

// adding properties
person.nation = "India";
console.log(person);

// modifying properties
person.age++;
console.log(person);

// delete property
delete person.isOnline;
console.log(person);

// method: when a function is stored as object property
const car = {
    brand: "Kia",
    model: "Seltos",
    variant: "HTK+",
    start: () => {
        return "Ignition on!"
    }
};
console.log(car.start());

// this keyword: refers to object it belongs to
const object1 = {
    name: "Akshat",
    greet: function() {
        return `Hello, i am ${this.name}`;
    }
};
console.log(object1.greet());

// destructuring
const laptop = {
    brand: "Apple",
    model: "Macbook Pro",
    year: 2025
};

const { brand, model } = laptop;
console.log(brand, model);

// Object.keys
console.log(Object.keys(laptop));
// Object.values
console.log(Object.values(laptop));
// Object.entries
console.log(Object.entries(laptop));
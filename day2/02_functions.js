// functions -> reusable block of code for specific task

// func declaration: uses function keyword, named function
function funky(param) {
    console.log("Funky function!");
    console.log(param);
    return 0;
}

funky('lol is param');

// hoisted
console.log(addNum(4, 4));

function addNum(a, b) {
    return a + b;
}

console.log(addNum(1, 9));

// func expression: assign function to var, anonymous function

// not hoisted
// console.log(funcValue(2,2)); Cannot access 'funcValue' before initialization

const funcValue = function (a, b) {
    return a * b;
}

console.log(funcValue(4, 0));

// arrow functions: es6 syntax for anonymous func
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(6, 2));

// not hoisted
// square(2);

const square = (a) => {
    console.log(a * a);
}

square(3);

// default values
const greet = (name = "User") => {
    console.log("Welcome " + name);
}

greet("Akshat");
greet();

// rest params
const addAll = (...nums) => {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(addAll(1,2,3,4,5));

// immediately invoked function exp: run right after being defined
(function () {
    console.log("iife");
})();


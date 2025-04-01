// string is sequence of characters 'abc@#$123'

let singleQ = 'Hello';
let doubleQ = "Yello";
let backQ = `Jello`;

console.log(singleQ);
console.log(doubleQ);
console.log(backQ);

// template literals: embed variables without concatenation

let name = "Akshat";
let age = 24;

//concatenation
console.log("I am " + name + ", and I am " + age + " years old");
//template literals
console.log(`My name is ${name} and I am ${age} yrs old`);

// Multi line strings
let message = `
    This is first line
    this is second line
    this is the last line
`
console.log(message);

// methods for strings

// 1. length
let texxt = 'Yellow';
console.log(texxt.length); // give 6

// 2. uppercase lowercase
let upp = texxt.toUpperCase();
console.log(upp); // YELLOW

let doww = texxt.toLowerCase();
console.log(doww); // yellow

// 3. trim = removes space before and after characters
let trimString = "  I am trimming this sentence ";
console.log(trimString);
console.log(trimString.trim());

// 4. slice
let sliced = "Fruit-Ninja";
console.log(sliced.slice(0, 5)); // Fruit
console.log(sliced.slice(-5)); // Ninja

// 5. substring
let substrings = "java script";
console.log(substrings.substring(0, 6));

// DIFFERENCE BETWEEN SLICE & SUBSTRING
// only slice supports negative index
// only substring allows index swap if start > end

// 6. replace
let sentence = "i like chips like";
console.log(sentence.replace("like", "eat")); // only first replaced
console.log(sentence.replaceAll("like", "eat")); // all are replaced

// 7. includes
let incl = "do you have an apple";
console.log(incl.includes("apple")); // true

// 8. startsWith endWith
console.log(incl.startsWith("do")); // true
console.log(incl.endsWith("mango")); //false

// 9. split
let fruits = "apple,oranges";
console.log(fruits.split(","));

// 10. concat
let word = "word";
console.log("Concat this ".concat(word));

// 11. repeat
let rep = "yo";
console.log(rep.repeat(3));
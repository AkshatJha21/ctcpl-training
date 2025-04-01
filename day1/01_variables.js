// Variable = container to store value
// declaration (let x) + assignment (x = 100)

let x;
// let x; Cannot redeclare block-scoped variable 'x'
x = 100;

// let x = 100;

var xvar = 0; // function scopped, reassign allowed, hoisted
let xlet = 0; // block scoped, can be reassigned, not hoisted
const xconst = 0; // block scoped, no reassginment, not hoisted

var a = 1; // global scope
let b = 2; // block scope
const c = 3; // constant

if (true) {
    var a = 10; // original a is changed
    let b = 20; // original b is unchanged
    console.log(b);
}

console.log(a); // returns 10 
console.log(b); // returns 2
console.log(c); // returns 3
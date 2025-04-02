// loops

// for loop -> fixed number of loops
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

// looping thru array
let arr = ['apple', 'mango', 'banana'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// while -> unknown number of loops
let w = 1;
while (w <= 5) {
    console.log(w);
    w++;
}

// do-while -> atleast once loop runs
let d = 90;
do {
    console.log(d);
    d++;
} while (d <= 5);

// for-of loop -> arr and str
let col = ['red', 'blue', 'yellow'];

for (let c of col) {
    console.log(c);
}

let java = 'coding';

for (let a of java) {
    console.log(a);
}

// for-in -> objects
let obj = {
    name: "Akshat",
    age: 21,
    college: "VIT"
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// break
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue
for (let i = 0; i < 6; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
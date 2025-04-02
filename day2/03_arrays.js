// arrays: ordered collection of items

const food = ['burger', 'pizza', 'chocolate'];
console.log(food);

// push method: add elems at end of arr
const nums = [1,2,3];
nums.push(4,5,6);
console.log(nums);

// pop method: remove last elem
const lastNum = nums.pop();
console.log(nums);
console.log(lastNum);

// slice: extracts portion of array without modifying
const numbers = [0,1,2,3,4,5,6];
const slicedNums = numbers.slice(2, 5);
console.log(numbers);
console.log(slicedNums);

// splice: remove, replace or add elems
const chars = ['a','b','c','d','e','f'];
chars.splice(0, 2);
console.log(chars);

const numerics = [1,2,10,7,8,9];
numerics.splice(2, 1, 3,4,5,6);
console.log(numerics);

// map: transform each element in arr
// creates new arr by applying a func to each elem
// original arr not modified
const nos = [1, 2, 3, 4];
const doubled = nos.map(n => n * 2);
console.log(doubled);

const users = [
    {
        name: "Akshat",
        age: 21
    },
    {
        name: "Foo Bar",
        age: 18
    },
    {
        name: "Tom",
        age: 14
    },
];
const names = users.map(user => user.name);
console.log(names);

// filter: creates new arr with elems that satisfy condition
const numeral = [1, 2, 3, 4, 5];
const even = numeral.filter(num => num % 2 === 0);
console.log(even);

const adults = users.filter(user => user.age >= 18);
console.log(adults);

// reduce: executes a func on each elem, accumulates single result
const totalSum = numeral.reduce((acc, num) => acc + num, 0);
console.log(totalSum);

const numList = [1, 11, 0, 89, 23];
const max = numList.reduce((acc, num) => {
    return num > acc ? num : acc;
}, numList[0]);
console.log(max);
// Clean Code Practices:

// 1. Use meaningful variables and function names

const x = (a: number, b: number) => a + b; // ❌
const sum = (num1: number, num2: number): number => num1 + num2; // 🆗

// 2. Write small and focused function

function validateUser(user: string): boolean { 
    return true; 
}
function logUser() {}
function saveUser() {}

function handleUser(user: string) {
    if (validateUser(user)) {
        logUser();
        saveUser();
    }
}

// 3. Avoid Deep Nesting

type User = {
    profile: {
        name: string;
        age: number;
    }
}

const user: User = {
    profile: {
        name: "Akshat",
        age: 21
    }
}

if (!user?.profile) {
    // return;
};

if (user.profile.age > 18) {
    // ... ;
}

// 4. Use types everywhere

type Person = { 
    name: string; 
    age: number 
}

function printDetails(person: Person): void {
    console.log(`${person.name} - ${person.age}`);
}

// 5. Avoid magic strings/numbers

let role;

enum Role {
    Admin = "admin",
    User = "user"
}

if (role === Role.Admin) {
    // ... ;
}

// 6. Use optional chaining & nullish coalescing

const userName = user?.profile.name ?? "Guest";

// 7. Avoid side effects in functions

// ❌
let count = 0;
function addToCount(num: number) {
    count += num;
}

// ✔️
function add(a: number, b: number): number {
    return a + b;
}
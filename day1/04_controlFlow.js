// control flow: code execution based on conditions

// if - else if - else
let age = 17;

if (age >= 18) {
    console.log("You can make driver license");
} else if (age >= 16) {
    console.log("You can make learner license");
} else {
    console.log("Please grow up before driving");
}

// ternary operator
let vote = 22;
let message = vote >= 21 ? 'Vote' : 'No Vote';
console.log(message);

// switch statement
let day = "Saturday";

switch (day) {
    case "Monday": 
        console.log("Happy Monday");
        break;
    case "Friday":
        console.log("Happy Weekend");
        break;
    case "Saturday":
    case "Sunday":
        console.log("DO NOT DISTURB");
        break;
    default:
        console.log("Normal day");
}

// logical operators
let yrs = 21;
let hasId = true;

if (yrs < 18 && !hasId) {
    console.log("Kick out");
} else if (yrs < 21 || !hasId) {
    console.log("Pay extra");
} else if (yrs >= 21 && hasId) {
    console.log("enter");
}
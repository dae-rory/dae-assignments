// JavaScript File: script.js

// Variables with different data types
let number = 5; // Integer
let message = "Current count: "; // String

// Mathematical operation
let doubledNumber = number * 2;

// Decision making structure
if (doubledNumber > 10) {
    console.log("Number is greater than 10.");
} else {
    console.log("Number is 10 or less.");
}

// Logical operator (AND)
if (doubledNumber > 0 && doubledNumber < 20) {
    console.log("Number is positive and less than 20.");
}

// Output to console
console.log(message + doubledNumber);

// Output to browser screen
document.addEventListener("DOMContentLoaded", function() {
    // Ensure the DOM is fully loaded
    document.getElementById("output").innerText = message + doubledNumber;
});
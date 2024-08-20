// Function to check if a number is greater than, less than, or equal to another number
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}.`);
    } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}.`);
    } else {
        console.log(`${num1} is equal to ${num2}.`);
    }
}

// Main function to get input and compare the numbers
function getInputAndCompare() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
    } else {
        compareNumbers(num1, num2);
    }
}

// Run the main function
getInputAndCompare();



//   // Function to check if a number is even
//   function isEven(number) {
//     return number % 2 === 0;
// }

// // Function to check if a number is odd
// function isOdd(number) {
//     return number % 2 !== 0;
// }

// // Main function to evaluate the number and print if it is even or odd
// function checkEvenOdd(number) {
//     if (isEven(number)) {
//         console.log(`${number} is even.`);
//     } else if (isOdd(number)) {
//         console.log(`${number} is odd.`);
//     } else {
//         console.log(`${number} is neither even nor odd.`);
//     }
// }

// // Test the function with different values
// checkEvenOdd(10);  // Output: 10 is even.
// checkEvenOdd(7);   // Output: 7 is odd.
// checkEvenOdd(0);   // Output: 0 is even.
// checkEvenOdd(-4);  // Output: -4 is even.
// checkEvenOdd(-5);  // Output: -5 is odd.

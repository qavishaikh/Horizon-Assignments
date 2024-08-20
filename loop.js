// let userNumber;

// do {
//     userNumber = +prompt("Enter a number greater than 10:");
// } while (userNumber <= 10);

// console.log("Thank you! You entered " + userNumber);


// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('----------');
}

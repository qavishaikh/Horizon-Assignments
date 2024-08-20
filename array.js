// Using a for Loop
// This is the traditional way of iterating through an array using a for loop.
// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


// The for...of loop is a more modern and concise way to iterate over array elements.

// const array = [1, 2, 3, 4, 5];

// for (const element of array) {
//   console.log(element);
// }

// The forEach method is a higher-order function that allows you to execute a provided function once for each array element.

const array = [1, 2, 3, 4, 5];

array.forEach(element => {
  console.log(element);
});

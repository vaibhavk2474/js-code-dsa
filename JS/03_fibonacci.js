// // 0 1 1 2 3 5 8 13

// const getFibonacci = (number) => {
//   let a = 0; // 1 1
//   let b = 1; //  1 2
//   let c = 0; //1    2 3

//   let count = 2;

//   if (number === 0 || number === 1) {
//     return number;
//   }

//   while (number >= count) {
//     c = a + b;
//     a = b;
//     b = c;

//     count++;
//   }

//   return c;
// };

// console.log(getFibonacci(10));

// Write a JavaScript function named generateFibonacci that generates the Fibonacci series up to a specified number of terms. The function should take a single integer as its argument, representing the number of terms to generate, and return an array containing the Fibonacci series.

// Provide example usage of the function to generate the first 10 terms of the Fibonacci series.

const getFibonacci = (number) => {
  const fibonacii = [];

  let a = 0;
  let b = 1;

  let count = 1;

  while (count <= number) {
    if (count == 1) {
      fibonacii.push(a);
      count++;
      continue;
    }
    if (count == 2) {
      fibonacii.push(b);
      count++;
      continue;
    }

    let c = a + b;
    fibonacii.push(c);

    a = b;
    b = c;
    count++;
  }

  return fibonacii;
};

console.log(getFibonacci(10));

// // givenNumber%2 === 0  meaning pura pura bhag gya h

// const getPrimeFactors = (givenNumber) => {
//   const primeFactors = [];
//   let divisor = 2;

//   while (givenNumber > 2) {
//     console.log(divisor, givenNumber, primeFactors);

//     if (givenNumber % divisor === 0) {
//       primeFactors.push(divisor);
//       givenNumber = givenNumber / divisor;
//     } else {
//       divisor++;
//     }
//   }

//   return primeFactors;
// };

// console.log("getPrimeFactors(20)", getPrimeFactors(20));

// Question:
// Write a JavaScript function to find all prime factors of a given number.
// The function should take a single argument (number) and return an array of prime factors.

// function findPrimeFactors(number) {
//   // Your code here
// }

// Example usage:
// console.log(findPrimeFactors(60)); // Output: [2, 2, 3, 5]
// console.log(findPrimeFactors(37)); // Output: [37]

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and the number itself. Examples of prime numbers include 2, 3, 5, 7, 11, and so on.

// Solution:

function findPrimeFactors(number) {
  const factors_arr = [];

  let devisor = 2;

  // while (number != 1) {
  //   while (number % devisor != 0) {
  //     devisor++;
  //   }

  //   factors_arr.push(devisor);
  //   number = number / devisor; //quotient = number
  // }

  while (number != 1) {
    while (number % devisor == 0) {
      factors_arr.push(devisor);
      number = number / devisor; //quotient = number
    }

    devisor++;
  }

  return factors_arr;
}

console.log(findPrimeFactors(60));
console.log(findPrimeFactors(37));

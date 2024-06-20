// Write a JavaScript function named isPrime that determines whether a given number is a prime number. The function should take a single integer as its argument and return true if the number is prime and false otherwise.

// Provide example usage of the function to test if a number (e.g., 29) is prime.

const isPrime = (number) => {
  let isPrime = true;

  for (let index = 2; index * index <= number; index++) {
    if (number % index == 0) {
      isPrime = false;
    }
  }

  return isPrime;
};

function isNumberPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrime(20));
console.log(isPrime(29));
console.log(isNumberPrime(20));
console.log(isNumberPrime(29));

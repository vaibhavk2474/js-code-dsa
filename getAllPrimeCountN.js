// prime numbers till N

const getAllPrimeNumbersCountN = (n) => {
  let count = 0;
  let number = 2;

  while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(number);
      count++;
    }
    number++;
  }
};

getAllPrimeNumbersCountN(10);

// prime numbers till N

const getAllPrimeNumbersTillN = (n) => {
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};

getAllPrimeNumbersTillN(100);

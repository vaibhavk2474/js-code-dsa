const getCountOfDigitInNumber = (number) => {
  let count = 0;

  while (number) {
    number = parseInt(number / 10);
    count++;
  }

  console.log(count);
};
getCountOfDigitInNumber(1000000000);
// console.log(parseInt(1/10))

// How do you remove duplicates from an integer array ?

const removeDuplicateNumber_01 = (array) => {
  const countOfNumbers = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (!countOfNumbers.hasOwnProperty(element)) {
      countOfNumbers[element] = 1;
    } else {
      countOfNumbers[element] += 1;
    }
  }

  return Object.keys(countOfNumbers).map((cItem) => Number(cItem));
};

console.log(removeDuplicateNumber_01([1, 2, 3, 5, 3, 1, 9]));

const removeDuplicateNumber_02 = (array) => {
  const uniqueArr = [];
  const duplicateArr = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    } else {
      duplicateArr.push(element);
    }
  }

  return uniqueArr;
};
console.log(removeDuplicateNumber_02([1, 2, 5, 1, 3, 10, 5, 5, 10, 5]));

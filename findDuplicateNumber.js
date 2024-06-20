// Write a program to find duplicate numbers in an integer array ?

const arr = [1, 2, 3, 5, 3, 1, 9];

const findDuplicatesValues = (arr) => {
  const numbersOfValues = {};

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (!numbersOfValues.hasOwnProperty(element)) {
      numbersOfValues[element] = 1;
    } else {
      numbersOfValues[element] += 1;
    }
  }

  return numbersOfValues;
};
console.log(findDuplicatesValues([1, 2, 3, 5, 3, 1, 9]));
const findDuplicateEle = (inputArr) => {
  let duplicateEleArr = [];
  let uniqueArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (!uniqueArr.includes(inputArr[i])) uniqueArr.push(inputArr[i]);
    else duplicateEleArr.push(inputArr[i]);
  }
  return duplicateEleArr;
};
console.log(findDuplicateEle([1, 2, 3, 5, 3, 1, 9]));

// check palindrome

function checkPalindrome(cInput) {
  cInput = cInput.toString();

  let isPalindrome = true;

  for (let i = 0; i < parseInt(cInput.length / 2); i++) {
    firstElement = cInput[i];
    lastElement = cInput[cInput.length - 1 - i];

    if (firstElement !== lastElement) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

// console.log(checkPalindrome(12321))

function getTotalVowelCount(cStr) {
  let vowelCount = 0;

  for (let i = 0; i < cStr.length; i++) {
    const cLetter = cStr[i];
    if (
      cLetter === "a" ||
      cLetter === "e" ||
      cLetter === "i" ||
      cLetter === "o" ||
      cLetter === "u"
    ) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

// console.log(getTotalVowelCount("hello how are you today programiz website?"))

function printFactorial(cNumber) {
  if (typeof cNumber !== "number") {
    console.log(cNumber, " is not a number.");
    return;
  }

  let facto = 1;

  for (let i = 2; i <= cNumber; i++) {
    facto = facto * i;
  }

  return facto;
}

function printFactorial_recursion(cNumber) {
  if (typeof cNumber !== "number") {
    console.log(cNumber, " is not a number.");
    return;
  }

  if (cNumber === 1) {
    return 1;
  }

  return cNumber * printFactorial_recursion(cNumber - 1);
}

// console.log(printFactorial(5))

// console.log(printFactorial_recursion(5))

function isPrime(cNumber) {
  let isPrime = true;

  for (let i = 2; i <= parseInt(cNumber / 2); i++) {
    if (cNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

// console.log(isPrime(10))

function isPerfectNumber(cNum) {
  let sum = 0;

  for (let i = 1; i < cNum; i++) {
    if (cNum % i === 0) {
      sum += i;
    }
  }

  return cNum === sum ? true : false;
}

// console.log(isPerfectNumber(15))

function findDuplicates(cArr) {
  const duplicateValueArr = [];
  const uniqueArr = [];

  for (let i = 0; i < cArr.length; i++) {
    const element = cArr[i];

    let haveDuplicate = false;

    for (let j = i + 1; j < cArr.length; j++) {
      if (element === cArr[j]) {
        haveDuplicate = true;
        break;
      }
    }

    if (haveDuplicate) {
      let present = false;

      for (let j = 0; j < duplicateValueArr.length; j++) {
        if (element === duplicateValueArr[j]) {
          present = true;
          break;
        }
      }

      if (!present) {
        duplicateValueArr.push(element);
      }
    } else {
      uniqueArr.push(element);
    }
  }

  return { duplicateValueArr, uniqueArr };
}

// console.log(findDuplicates([1,2,3,5,3,1,9]))

const findDuplicateEle = (inputArr) => {
  let duplicateEleArr = [];
  let uniqueArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (!uniqueArr.includes(inputArr[i])) uniqueArr.push(inputArr[i]);
    else duplicateEleArr.push(inputArr[i]);
  }
  return { duplicateEleArr, uniqueArr };
};
// console.log(findDuplicateEle([1,2,3,5,3,1,9]));

let peopleArr = [
  { name: "A", age: 10 },
  { name: "B", age: 17 },
  { name: "C", age: 14 },
  { name: "D", age: 10 },
  { name: "E", age: 14 },
];

const groupByAge = (peopleArr) => {
  const group = {};
  for (let i = 0; i < peopleArr.length; i++) {
    const element = peopleArr[i];
    if (group.hasOwnProperty(element.age)) {
      group[element.age].push(element.name);
    } else {
      group[element.age] = [element.name];
    }
  }

  return group;
};

// console.log(groupByAge(peopleArr))

// 1 2 3 4 5 6 7
// 2 3 4 5 6 7 8
// 3 4 5 6 7 8 9
//

const getTotalMoney = (n) => {
  const totalWeeks = parseInt(n / 7);
  const remainigDays = n % 7;

  let w = 0;
  let d = 0;

  const getAdd = (i, count, remainigDays) => {
    console.log(i, count, remainigDays);

    if (count === remainigDays) {
      return i;
    }

    return i + getAdd(i + 1, count + 1, remainigDays);
  };

  for (let i = 1; i <= totalWeeks; i++) {
    w += getAdd(i, 1, 7);
  }

  if (remainigDays) {
    d += getAdd(totalWeeks + 1, 1, remainigDays);
  }

  return w + d;
};

console.log(getTotalMoney(21));

n = 21;
let total = 0;
for (var i = 0; i < n; i++) {
  let week = parseInt(i / 7) + 1;
  total += week + (i % 7);
  console.log(total, week, i % 7);
}
console.log(total);

// const arr = [1, 1, 23, 32, 23, 1, 50, 40, 60, 50];

// // const arr = [10, 20, 30, 40, 50];
// const getNthLargets = (arr, n) => {
//   // sort
//   const newSortedArr = arr.sort((a, b) => {
//     return b - a;
//   });

//   // remove duplicates
//   const nd = [];
//   for (let i = 0; i < newSortedArr.length; i++) {
//     if (nd.indexOf(newSortedArr[i]) == -1) {
//       nd.push(newSortedArr[i]);
//     } else {
//       continue;
//     }
//   }
//   console.log(nd);

//   return nd[n - 1];
// };

// console.log(getNthLargets(arr, 3));

// const getLargestAndSamllestNumber = (arr) => {
//   let largestNumber = -Infinity;
//   let smallestNumber = +Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }

//     if (arr[i] < smallestNumber) {
//       smallestNumber = arr[i];
//     }
//   }

//   return {
//     largestNumber,
//     smallestNumber,
//   };
// };

// console.log(getLargestAndSamllestNumber([1, 5, 6, 7, 5, 20, 1, 1, 5, 10]));

const getNthLargestAndSamllestNumber = (arr = [], n) => {
  let nthlargestNumber = +Infinity;
  let nthsmallestNumber = -Infinity;

  while (n) {
    let largestNumber = -Infinity;
    let smallestNumber = +Infinity;

    let i = 0;
    while (i < arr.length) {
      if (arr[i] > largestNumber && arr[i] < nthlargestNumber) {
        largestNumber = arr[i];
      }

      if (arr[i] < smallestNumber && arr[i] > nthsmallestNumber) {
        smallestNumber = arr[i];
      }

      i++;
    }

    nthlargestNumber = largestNumber;
    nthsmallestNumber = smallestNumber;

    n--;
  }

  return {
    nthlargestNumber,
    nthsmallestNumber,
  };
};
const getNthLargestAndSamllestNumberWithSort = (arr = [], n) => {
  const sortedArr = arr.sort((a, b) => b - a);

  const uniqueArr = [];
  sortedArr.forEach(
    (cItem) => uniqueArr.indexOf(cItem) == -1 && uniqueArr.push(cItem)
  );

  return {
    nthlargestNumber: uniqueArr[n - 1],
    nthsmallestNumber: uniqueArr[uniqueArr.length - n],
  };
};

console.log(
  getNthLargestAndSamllestNumber([1, 5, 6, 7, 5, 20, 1, 1, 5, 10], 3)
);

console.log(
  getNthLargestAndSamllestNumberWithSort([1, 5, 6, 7, 5, 20, 1, 1, 5, 10], 3)
);

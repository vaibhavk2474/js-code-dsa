// // Write a program to check if value/target exists or not in ascending array in O(log n)
// // time complexity ?

// const arr = [1, 30, 50, 5, 8, 10, 40, 50];
// const findElement = (arr = [], element) => {
//   const el = arr.find((cItem) => cItem == element);
//   const index = arr.findIndex((cItem) => cItem == element);
//   return { el, index };
// };

// const findElementWithBinarySearch = (arr = [], element, index) => {
//   if (arr.length <= 1) {
//     // console.log(arr, index);
//     // console.log(arr, index);

//     return arr[0] == element ? { el: arr[0], index } : undefined;
//   }

//   const middlePoint = parseInt(arr.length / 2);
//   //   console.log(arr, middlePoint, index);

//   if (arr[middlePoint] > element) {
//     return findElementWithBinarySearch(
//       arr.slice(0, middlePoint),
//       element,
//       index
//     );
//   } else if (arr[middlePoint] < element) {
//     return findElementWithBinarySearch(
//       arr.slice(middlePoint + 1),
//       element,
//       index + middlePoint + 1
//     );
//   } else {
//     return {
//       el: arr[middlePoint],
//       index: index + middlePoint,
//     };
//   }
// };

// console.log(findElementWithBinarySearch([1, 2, 3, 3, 3, 4], 1, 0));
// console.log(findElementWithBinarySearch([1, 2, 3, 3, 3, 4], 2, 0));
// console.log(findElementWithBinarySearch([1, 2, 3, 3, 3, 4], 3, 0));
// console.log(findElementWithBinarySearch([1, 2, 3, 3, 3, 4], 4, 0));
// console.log(findElementWithBinarySearch([1, 2, 3, 3, 3, 4], 5, 0));

// const findData = (array, cb) => {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (cb(element, index, array)) {
//       return {
//         element,
//         index,
//       };
//     }
//   }
// };

// console.log(
//   findData([1, 2, 3, 4, 5], (c, i, arr) => {
//     return c === 5;
//   })
// );
// console.log(
//   findData([{ a: "1" }, { b: 5 }], (c, i, arr) => {
//     return c.a == "1";
//   })
// );

Array.prototype.findData = function (cb) {
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (cb(element, index, array)) {
      return {
        element,
        index,
      };
    }
  }
};
console.log(
  [1, 2, 3, 4, 5].findData((c, i, arr) => {
    return c === 5;
  })
);
console.log(
  [{ a: "1" }, { b: 5 }].findData((c, i, arr) => {
    return c.a == "1";
  })
);

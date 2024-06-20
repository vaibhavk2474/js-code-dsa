// console.log("how to logs data");
// const array = [1, 2, 3, 4, 5];
// (async function () {
//   for (let i = 0; i < array.length; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulates async work
//     console.log(array[i]);
//   }
// })();

// will not work
const arr = [1, 2, 3, 4, 5];
arr.forEach(async function (element) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulates async work
  console.log(element);
});

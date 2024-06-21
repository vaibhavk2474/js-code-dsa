// 1. async/await function: handle async code with async/await

// using setTimeout
// create a function which return promise
// const asyncHandler = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       res("done");
//     }, 3000);
//   });

// 1. call one time
// const callAsyncFun = (async () => {
//   const res = await asyncHandler();
//   console.log(res);
// })();

// console.log(callAsyncFun);

// 1.1 all two times one after another
// const callAsyncFun = (async () => {
//   const res1 = await asyncHandler();
//   console.log(res1);
//   const res2 = await asyncHandler();
//   console.log(res2);

//   const res3 = await asyncHandler();
//   console.log(res3);
// })();

// const callAsyncFun = (async () => {
//   const res1 = await asyncHandler();
//   console.log(res1);
//   return res1;
// })();

// (async () => {
//   const res1 = await callAsyncFun;

//   console.log(res1);

//   const res2 = await asyncHandler();
//   console.log(res2);
// })();

// ...............................................

// use Promise
// create a function which return promise
const asyncHandler = async (apiURL) => {
  console.log("asyncHandler 1");

  const res = await fetch(apiURL);

  console.log("res", res);

  console.log("asyncHandler 2");
  return res;
};

// 1. call one time
// asyncHandler("https://jsonplaceholder.typicode.com/todos/1").then((res1) => {
//   console.log("res1", res1);
// });

// 1.1 all two times one after another
console.log(1);

(async () => {
  console.log(3);
  const res = await asyncHandler(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(4);

  const response = await res.json();

  console.log(5);

  console.log("response", response);
  console.log(7);
})();
console.log(8);

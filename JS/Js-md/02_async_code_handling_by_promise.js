// 1. Promise function: handle async code with promises

// using promise
// create a function which return promise
// const asyncHandler = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("done");
//     }, 3000);
//   });

// 1. call one time
// asyncHandler().then((res) => {
//   console.log("res: ", res);
// });

// 1.1 all two times one after another
// asyncHandler()
//   .then((res) => {
//     console.log("res 1 ", res);
//     return asyncHandler();
//   })
//   .then((res) => {
//     console.log("res 2 ", res);
//     return asyncHandler();
//   })
//   .then((res) => {
//     console.log("res 5 ", res);
//   });
// ...............................................

// use Promise
// create a function which takes callback
const asyncHandler = (apiURL) => {
  console.log("asyncHandler 1", apiURL);

  const res = fetch(apiURL);
  // res.then((r) => {
  //   console.log("asyncHandler 2");

  //   console.log("r1: ", r);
  //   return new Promise((reslove) => {
  //     reslove(r.json());
  //   });
  // });

  console.log("asyncHandler 3", apiURL);
  return res;
};

// 1. call one time
// console.log(1);
// asyncHandler("https://jsonplaceholder.typicode.com/todos/1").then((r) => {
//   console.log(3);
//   console.log("r: ", r);
// });
// console.log(2);

// 1.1 all two times one after another
console.log(1);
asyncHandler("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(3, "response", response);
    return response.json();
  })
  .then((response) => {
    console.log(4);
    console.log(response);
  })
  .then((res) => {
    console.log("res", res);
  })
  .then((res) => {
    console.log("res again", res);
    return asyncHandler("https://jsonplaceholder.typicode.com/todos/1");
  })
  .then((response) => {
    console.log(5, "response", response);
    return response.json();
  })
  .then((response) => {
    console.log(5);
    console.log(response);
  });
console.log(2);

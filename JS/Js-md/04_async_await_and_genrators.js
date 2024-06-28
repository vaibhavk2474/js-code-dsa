// async function fetchData() {
//   console.log("fetchData 1");
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//   console.log("fetchData 2");

//   const data = await response.json();

//   console.log("fetchData 3");

//   console.log(data);

//   console.log("fetchData 4");
// }

// console.log(1);

// fetchData();

// console.log(2);

// ................
// function* fetchData() {
//   console.log("fetchData 1");
//   const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");

//   console.log("fetchData 2");

//   const data = yield response.json();

//   console.log("fetchData 3");

//   console.log(data);

//   console.log("fetchData 4");
// }

// console.log(1);

// // wrong way to do
// fetchData()
//   .next()
//   .value.then((r) => console.log("r1", r));

// fetchData()
//   .next()
//   .value.then((r) => console.log("r2", r));

// console.log(2);

// ................
function* fetchData() {
  console.log("fetchData 1");
  const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log("fetchData 2");

  const data = yield response.json();

  console.log("fetchData 3");

  console.log(data);

  console.log("fetchData 4");
}

console.log(1);

// // wrong way to do
fetchData()
  .next()
  .value.then((response) => {
    console.log("r1", response);
    return fetchData().next(response).value;
  })
  .then((response) => console.log("r2", response));

console.log(2);

// ......................

// right way to do it
// function* generatorFunction() {
//   console.log("generatorFunction 1");
//   try {
//     console.log("generatorFunction 2");

//     const response = yield fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     console.log("generatorFunction 3");

//     const data = yield response.json();

//     console.log("generatorFunction 4");

//     console.log(data);

//     console.log("generatorFunction 5");
//   } catch (error) {
//     console.error("Error:", error);
//   }

//   console.log("generatorFunction 7");
// }

// const gen = generatorFunction();
// const promise = gen.next().value;

// console.log("promise", promise);

// console.log(1);

// promise.then((r) => gen.next(r).value).then((d) => gen.next(d));

// console.log(2);

// ..........................................
function* generatorA() {
  const res1 = yield 3 + 5;
  const res2 = yield 10;
}

const gen = generatorA();

console.log(gen.next());
console.log(gen.next());

console.log(gen.next());

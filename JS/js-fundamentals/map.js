const map = new Map();

const user1 = { name: "vk" };
const user2 = { name: "rt" };

map.set("a", 1);

const updateUserCount = (user) => {
  if (!map.get(user)) {
    map.set(user, 1);
    return;
  }
  map.set(user, map.get(user) + 1);
};
updateUserCount(user1);
updateUserCount(user1);
updateUserCount(user1);
updateUserCount(user1);
updateUserCount(user2);
// console.log(map);

// let's create an object
const obj1 = {};

// adding object as key
const user3 = { name: "akash" };
const user4 = { name: "anuj" };

obj1[user3] = "12345";
obj1[user4] = true;

// console.log(obj1, `${user3}`);

// stringify an object
// console.log(JSON.stringify(user4), `${user4}`, String(user4));

// check all types of keys

const map1 = new Map();

// map1.set("a", 1);
// map1.set("a", 1);
// map1.set(false, 1);
// map1.set(false, 1);

// map1.set(5, 1);
// map1.set(5, 5);

// map1.set({ a: "aakash" }, 1);
// map1.set({ a: "aakash" }, 5);

// map1.set([1, "2"], 1);
// map1.set([1, "2"], 5);

// map1.set(undefined, 1);
// map1.set(undefined, 5);

// map1.set(null, 1);
// map1.set(null, 5);

// map1.set("", 1);
// map1.set("", 5);

// map1.set(0, 1);
// map1.set(0, 5);

// map1.set(NaN, 1);
// map1.set(NaN, 5);

// console.log(map1);

// .....................................

const m1 = new Map([
  ["a", true],
  [true, "hello"],
]);

// console.log(m1);

// create object to entries
// console.log(
//   Object.entries({
//     name: "anuj",
//     age: 21,
//   })
// );

const m2 = new Map(
  Object.entries({
    name: "anuj",
    age: 21,
  })
);

m2.set(() => {
  console.log("hello");
}, "function");

// console.log(m2);

const u = {};
m2.forEach((cValue, cKey, map) => {
  //   console.log(cKey, cValue, map);
  u[cKey] = cValue;
});

console.log(u);
console.log(Object.fromEntries(m2));

// const user = {
//   name: "arj",
// };

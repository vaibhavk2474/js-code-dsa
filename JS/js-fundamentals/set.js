let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// visits, some users come multiple times
set.add({ name: "John" });
set.add({ name: "Pete" });
set.add({ name: "Mary" });
set.add({ name: "John" });
set.add({ name: "John" });

// console.log(set);

const s1 = new Set(["a", true, "hello", "a", "a", true, "hello", "a"]);

// console.log(s1);

s1.forEach((cValue, cKey, set) => {
  console.log(cValue, cKey, set);
});

console.log(Array.from(s1));

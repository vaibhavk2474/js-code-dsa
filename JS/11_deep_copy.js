const deepCopyFun = (obj) => {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }

  if (obj?.length >= 0) {
    const newArr = [];
    obj.forEach((cKey) => {
      const v = deepCopyFun(cKey);

      newArr.push(v);
    });

    return newArr;
  } else {
    const newObj = {};
    Object.keys(obj).forEach((cKey) => {
      const v = deepCopyFun(obj[cKey]);

      newObj[cKey] =
        typeof v == "object" ? (v?.length >= 0 ? [...v] : { ...v }) : v;
    });

    return newObj;
  }
};

const original = {
  a: 1,
  b: { c: 2 },
  c: [1, 2, 3, 4, 5],
  d: "name",
  e: {
    name: "akash",
    friends: ["anuj", "pawan"],
  },
};
const deepCopy = deepCopyFun(original);

deepCopy.anotherKey = "hello";
console.log(original, deepCopy, original == deepCopy, original === deepCopy);

// .........................................
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
const originalNew = { a: 1, b: { c: 2 } };
const deepCopy = deepCopy(originalNew);

function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}

// Usage
console.log(isArray([1, 2, 3])); // true
console.log(isArray("Hello")); // false
console.log(isArray({ a: 1 })); // false
console.log(isArray(undefined)); // false
console.log(isArray(null)); // false

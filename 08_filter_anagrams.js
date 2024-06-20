// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let arr1 = ["nap", "anp", "pan", "npa", "pna"];

const aclean = (arr) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    const a = element.toLowerCase().split("").sort().join("");
    if (
      !newArr.find((cItem) => {
        const b = cItem.toLowerCase().split("").sort().join("");
        return a == b;
      })
    ) {
      newArr.push(element);
    }
  }

  return newArr;
};
console.log(aclean(arr1));

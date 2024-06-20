// Write a program to get total vowel count from String ?

const countVowel = (str = "") => {
  const cStr = str.toLowerCase();
  const vowelCount = {
    // a: 0,
    // e: 0,
    // i: 0,
    // o: 0,
    // u: 0,
  };

  for (let index = 0; index < cStr.length; index++) {
    const element = str[index];

    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      !vowelCount.hasOwnProperty(element)
        ? (vowelCount[element] = 1)
        : (vowelCount[element] += 1);
    }
  }

  return vowelCount;
};

console.log(countVowel("aeiouqwertyu"));

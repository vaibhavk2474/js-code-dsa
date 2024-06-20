// manual To Lower Case

const manualToLowerCase = (str = "") => {
  let nStr = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);

    // console.log(ch);

    if (ch >= 65 && ch <= 90) {
      ch += 32;
    }

    nStr += String.fromCharCode(ch);
  }

  return nStr;
};

console.log(manualToLowerCase("Vaibhav Kumar"));

const manualToLowerCase_01 = (str = "") => {
  let nStr = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "A" && ch <= "Z") {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    nStr += ch;
  }

  return nStr;
};

console.log(manualToLowerCase_01("Vaibhav Kumar"));

// console.log("A".charCodeAt(0));
// console.log("a".charCodeAt(0));
// console.log("Z".charCodeAt(0));
// console.log("z".charCodeAt(0));

console.log("a".toString(2));
console.log((65).toString());
console.log((65).toString(2));
console.log((65).toString(8));
console.log((65).toString(10));
console.log((2).toString(2));

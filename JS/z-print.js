// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("*****");
console.log("   *");
console.log("  *");
console.log(" *");
console.log("*****");

for (let i = 0; i < 5; i++) {
  if (i == 0 || i == 4) {
    let cStr = "";
    for (let j = 0; j < 5; j++) {
      cStr += "*";
    }
    console.log(cStr);
  } else {
    let cStr = "";
    for (let j = 0; j < 4 - i; j++) {
      cStr += " ";
    }
    cStr += "*";
    console.log(cStr);
  }
}

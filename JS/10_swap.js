const swapCharByXOR = (a = "", b = "") => {
  let binary_a = a.charCodeAt(0).toString(2);
  let binary_b = b.charCodeAt(0).toString(2);

  binary_a = binary_a ^ binary_b;
  binary_b = binary_a ^ binary_b;
  binary_a = binary_a ^ binary_b;

  binary_a = String.fromCharCode(parseInt(binary_a, 2));
  binary_b = String.fromCharCode(parseInt(binary_b, 2));

  return {
    a: binary_a,
    b: binary_b,
  };
};

// console.log(swapCharByXOR("a", "b"));

const swapNumberWithXOR = (a = 1, b = 2) => {
  let b1 = a.toString(2);
  let b2 = b.toString(2);
  console.log(b1, b2);

  b1 = b1 ^ b2;
  b2 = b1 ^ b2;
  b1 = b1 ^ b2;

  a = parseInt(b1, 2);
  b = parseInt(b2, 2);

  return {
    a,
    b,
  };
};

// console.log(swapNumberWithXOR(2, 7), "0011111" ^ "01");

const swapWithoutTemp = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;

  return { a, b };
};

// console.log(swapWithoutTemp(-100, 0));

const swapStrByXOR = (str1 = "", str2 = "") => {
  let nStr1 = "";
  let nStr2 = "";

  const length = str1.length > str2.length ? str2.length : str1.length;

  let index = 0;
  for (index; index < length; index++) {
    const e1 = str1[index];
    const e2 = str2[index];

    let binary_a = e1.charCodeAt(0).toString(2);
    let binary_b = e2.charCodeAt(0).toString(2);

    binary_a = binary_a ^ binary_b;
    binary_b = binary_a ^ binary_b;
    binary_a = binary_a ^ binary_b;

    nStr1 += String.fromCharCode(parseInt(binary_a, 2));
    nStr2 += String.fromCharCode(parseInt(binary_b, 2));
  }

  if (index < str1.length) {
    nStr2 += str1.substring(index);
  }

  if (index < str2.length) {
    nStr1 += str2.substring(index);
  }

  return {
    nStr1,
    nStr2,
  };
};

console.log(swapStrByXOR("Vaibhav", "kumar"));

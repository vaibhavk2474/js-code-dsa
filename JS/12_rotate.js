// 1 You are given two numbers n and k You are required to rotate n. k times to the right If k
// Is positive. rotate to the right Le. remove rightmost

// digit and make it leftmost. Do the reverse for negative value of k Also k can have an
// absolute value larger than number of digits in n.

// 2 Take as input nand k.

// 3 Print the rotated number

// 4 Note - Assume that the number of rotations will not cause leading 0's in the result eg.
// such an input will not be given

// n - 12340056

// k=3

// r-05612340

const rotationNumber = (n, k) => {
  let q;
  let r;

  k = parseInt(k % countDigits(n));

  if (k < 0) {
    while (k) {
      q = parseInt(n / 10 ** (countDigits(n) - 1));

      r = parseInt(n % 10 ** (countDigits(n) - 1));

      console.log(n, q, r, k);

      n = r * 10 + q;

      k++;
    }
  } else {
    while (k) {
      r = parseInt(n % 10);
      n = parseInt(n / 10);

      console.log(n, r, k);
      n = r * 10 ** countDigits(n) + n;

      k--;
    }
  }

  return n;
};
const countDigits = (n) => {
  let c = 0;
  while (n) {
    n = parseInt(n / 10);
    c++;
  }

  return c;
};

console.log("h", rotationNumber(12345, -6));

console.log("h", rotationNumber(12345, 0));
console.log("h", rotationNumber(12345, 6));

const rotationNumberUsingStr = (n, k) => {
  let str = n.toString();

  while (k) {
    str = str.substring(str.length - 1) + str.substring(0, str.length - 1);

    k--;
  }

  return Number(str);
};

// console.log("h1", rotationNumberUsingStr(12345,5))

const rotateFun = (n, k) => {
  let div = 1;
  let mul = 1;
  let r;

  const totalDigits = countDigits(n);
  k = k % totalDigits;

  if (k < 0) {
    k += totalDigits;
  }

  for (let i = 1; i <= totalDigits; i++) {
    if (i <= k) {
      div *= 10;
    } else {
      mul *= 10;
    }
  }

  r = parseInt(n % div);
  n = parseInt(n / div);

  n = r * mul + n;

  return n;
};

console.log(rotateFun(12345, 3));
console.log(rotateFun(12345, 0));
console.log(rotateFun(12345, -3));

console.log(rotateFun(12345, -0));

console.log("................................................");
console.log(-4 % 5, 4 % 5);
console.log(-0 % 5, 0 % 5);
console.log(-5 % 5, 5 % 5);
console.log(-0 == 0);

console.log(".....................");

console.log("1 > 2 > 3", 1 > 2 > 3, typeof 1 > 2 > 3);
console.log(`1 + 2 + true + 3`, 1 + 2 + true + 3, typeof (1 + 2 + true + 3));
console.log(`1 + 2 + false + 3`, 1 + 2 + false + 3, typeof (1 + 2 + false + 3));
console.log(`1 + 2 + "" + 3`, 1 + 2 + "" + 3, typeof (1 + 2 + "" + 3));
console.log(`1 + 2 + "1" + 3`, 1 + 2 + "1" + 3, typeof (1 + 2 + "1" + 3));
console.log(`1 + 2 + "a" + 3`, 1 + 2 + "a" + 3, typeof (1 + 2 + "a" + 3));
console.log(`"1" + 2 + 3`, "1" + 2 + 3, typeof ("1" + 2 + 3));
console.log(`"1" + 2 + "3"`, "1" + 2 + "3", typeof ("1" + 2 + "3"));
console.log(`1 + 2 + "3"`, 1 + 2 + "3", typeof (1 + 2 + "3"));
console.log(`1 + "2" + 3`, 1 + "2" + 3, typeof (1 + "2" + 3));
console.log(
  `1 + 2 + "3"+4+5`,
  1 + 2 + "3" + 4 + 5,
  typeof (1 + 2 + "3" + 4 + 5)
);

console.log(".....................");

if (-0) {
  console.log("true");
} else {
  console.log("false");
}

console.log(".....................");

const q = parseInt(12345 / 100);
const r = parseInt(12345 % 100);
console.log(q, r);
console.log(r * 1000 + q);

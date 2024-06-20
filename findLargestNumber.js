const arr = [1, 1, 23, 32, 23, 1, 50, 40, 60, 50];

// const arr = [10, 20, 30, 40, 50];
const getNthLargets = (arr, n) => {
  const newSortedArr = arr.sort((a, b) => {
    return b - a;
  });

  const nd = [];
  for (let i = 0; i < newSortedArr.length; i++) {
    if (nd.indexOf(newSortedArr[i]) == -1) {
      nd.push(newSortedArr[i]);
    } else {
      continue;
    }
  }
  console.log(nd);

  return nd[n - 1];
};

console.log(getNthLargets(arr, 3));

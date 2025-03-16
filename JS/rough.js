const arrr = [10, 40, 20, 5, 2, 25, 50, 15, 3];

const getAllPairsOfGivenSum = (arr, total, sum, cIndex) => {
  //   console.log(arr,total,sum,cIndex)

  const newArr = [];
  const cValue = arr[cIndex];
  total = cValue + total;

  if (total == sum) {
    return [cValue];
  }
  if (total > sum || cIndex >= arr.length) {
    return [];
  }

  //   let totalSum =cValue + total

  const rValueArr = getAllPairsOfGivenSum(arr, total, sum, cIndex + 1);

  newArr.push([arr[cIndex]]);
  rValueArr?.length > 0 && newArr.push(rValueArr);

  return newArr;
};

const getAllPairsOfSum = (arr, sum) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const rValueArr = getAllPairsOfGivenSum(arr, 0, sum, i);

    if (rValueArr?.length > 0) {
      newArr.push(rValueArr);
    }
  }

  return newArr;
};
console.log(getAllPairsOfSum(arrr, 30));

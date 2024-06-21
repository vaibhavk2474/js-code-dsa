const mergeSort = (arr = []) => {
  if (arr.length === 1) {
    // console.log(arr[0]);
    return arr;
  }
  const middlePoint = parseInt(arr.length / 2);
  const left = arr.slice(0, middlePoint);
  const right = arr.slice(middlePoint, arr.length);

  const sort = (arr1 = [], arr2 = []) => {
    const newSortedArr = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        newSortedArr.push(arr2[j]);
        j++;
      } else {
        newSortedArr.push(arr1[i]);
        i++;
      }
    }

    if (i < arr1.length) {
      for (let index = i; index < arr1.length; index++) {
        const element = arr1[index];
        newSortedArr.push(element);
      }
    }

    if (j < arr2.length) {
      for (let index = j; index < arr2.length; index++) {
        const element = arr2[index];
        newSortedArr.push(element);
      }
    }
    console.log(arr1, arr2, newSortedArr);

    return newSortedArr;
  };

  const el = sort(mergeSort(left), mergeSort(right));

  //   console.log("el", left, right, el);
  return el;
};

console.log(mergeSort(arr));
// mergeSort(a);

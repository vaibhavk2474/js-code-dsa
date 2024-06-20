const arr = [40, 20, 20, 30, 10, 3, 5, 1, 20, 40, 50, 50, 10];

const a = [5, 4, 3, 5, 2, 1];

const bubbleSort = (arr = [], compare) => {
  let count = 0;
  for (let i = 1; i <= arr.length; i++) {
    let swapped = false;
    for (let j = 1; j < arr.length - i + 1; j++) {
      count++;

      if (compare(arr[j - 1], arr[j]) > 0) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  console.log(count);
  return arr;
};

console.log(bubbleSort(arr, (a, b) => a - b));

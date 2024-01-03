const largestValue = (arr, end) => {
  let highest = arr[0],
    index = 0;
  for (let i = 1; i <= end; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
      index = i;
    }
  }
  return index;
};

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let highestValueIndex = largestValue(arr, arr.length - 1 - i);
    swap(arr, highestValueIndex, arr.length - 1 - i);
  }
};

let arr = [8, 56, 2, 4, 6, 7, 1];
selectionSort(arr);

console.log(arr);

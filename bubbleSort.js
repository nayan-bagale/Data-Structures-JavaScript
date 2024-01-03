const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let bool = false;
    for (let j = 1; j <= arr.length - 1 - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        bool = true;
      }
    }
    if (!bool) break;
  }
};

const arr = [9, 8, 7, 6, 4, 5, 3, 2, 1];
bubbleSort(arr);

console.log(arr);

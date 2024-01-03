const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`pass ${i} `);
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
};

let arr = [8, 5, 6, 7, 85, 0, 1];
insertionSort(arr);
console.log(arr);

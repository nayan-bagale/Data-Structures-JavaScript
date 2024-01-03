const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
};

const merge = (first, second) => {
  let i = 0,
    j = 0,
    k = 0;
  let mix = [];

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      mix[k] = first[i];
      i++;
    } else {
      mix[k] = second[j];
      j++;
    }
    k++;
  }

  while (i < first.length) {
    mix[k] = first[i];
    i++;
    k++;
  }

  while (j < second.length) {
    mix[k] = second[j];
    j++;
    k++;
  }

  return mix;
};

let arr = [5, 3, 2,0];
console.log(mergeSort(arr));
// let mid = Math.floor(arr.length / 2);
// console.log(mid);
// console.log(arr.slice(0, mid));
// console.log(arr.slice(mid, arr.length));

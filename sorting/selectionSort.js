//O(n^2)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    // console.log("before-->", arr);
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    // console.log("after-->", arr);
  }
  return arr;
};

console.log(selectionSort([4, 3, 2, 1, 5]));

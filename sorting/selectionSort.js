//find min value as looping through, at the end swap find min and arr[0] and cut the first element and repeat, so move to arr[1] and find min and swap at the end.
//O(n^2) space O(1)
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

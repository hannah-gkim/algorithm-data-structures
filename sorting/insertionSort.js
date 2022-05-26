//compare previus nums with current ones, so as we compare, the number of numbers we have to compare will  increase, so at i=4 for example, we want to compare arr[i] at 3,2,1
// time O(n^2) space O(1)
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) { 
    let currentVal = arr[i]; 
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; 
    }
    console.log("what is j??", j); // -1 why ?
    arr[j + 1] = currentVal;
  }
  console.log("final return->", arr);
  return arr;
};

insertionSort([4, 3, 2, 1, 5]);
// 4 4  2 1 5 -> 3 4 2 1 5
//      j   i
// i=2  2 3 4 1 5
// i=3->1      j i
//         1 2 3 4 5

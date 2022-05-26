//Bubble sort
//swap first 2 consecutive numbers smaller to larger, largest num will end up in the end and cut the size of arr and start comparing first 2 and repeat
//O(n^2) space O(1)
const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

console.log(bubbleSort([4, 3, 2, 1, 5]));

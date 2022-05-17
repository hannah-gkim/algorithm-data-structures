/*
accepts array of integers and a number called n
calculate the max sum of n consecutive elements in the array 
 */
//O(n^2)
// function maxSubarraySum(arr, n) {
//   if (n > arr.length) return null;
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) max = temp;
//   }
//   return max;
// }

// Sliding window: O(n);
function maxSubarraySum(arr, num) {
  let max = 0;
  let temp = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([], 4)); //null

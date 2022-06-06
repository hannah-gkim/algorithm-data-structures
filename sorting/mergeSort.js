//it is a combination of merging and sorting
// works by decomposing an array into smaller array then build up a newly sorted array
// break it down, recurse? until there are only 2 elements left

/*
break up the arr into halves until you have arrays that are empty or have on element
once you have smaller sorted arrays, merge those until you are back at the full length of the array, so from bottom of the tree where there is only one or two elements in array, start merge back up.
*/

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
//time O(nlogn) space O(n)
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr; //[10]
  let mid = Math.floor(arr.length / 2); //3
  let left = mergeSort(arr.slice(0, mid)); // [10]
  console.log("left:", left);

  let right = mergeSort(arr.slice(mid));
  //   console.log("arr:", arr);
  console.log(left, right);
  return merge(left, right); // 24 76
};

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); //[ 1,  9, 10, 24, 72, 73, 76 ]
//console.log(merge([1, 10, 50], [2, 14, 99, 100])); //1,2,10,14,50,99,100

function binarySearch(arr, search) {
  let mid = Math.floor(arr.length / 2);
  //   console.log("mid1-->", mid); //  i=2 3
  let left = 0;
  let right = arr.length - 1;
  while (search !== arr[mid] && left < right) {
    if (search < arr[mid]) right = mid - 1;
    else if (search > arr[mid]) {
      left = mid + 1;
    } else {
      return -1;
    }
    // console.log(left, right);
    mid = Math.floor((left + right) / 2);
  }
  if (search === arr[mid]) return mid;
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

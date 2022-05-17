/*
write a function sameFrequency, given 2 positive integers, find out if the 2 nums have the same frequency of digits
frequency counter patter uses hash table
*/

function sameFrequency(num1, num2) {
  //use hash={}
  // first store key value pair of num1 to hash
  // {1:1, 8:1, 2:1}...
  //loop through num2,  check if num2[i] is in hash, if note return false
  //edge case? if length of num1 and num2 diffrent, false
  num1 = num1.toString();
  num2 = num2.toString();
  let hash = {};
  if (num1.length !== num2.length) return false;
  for (let i = 0; i < num1.length; i++) {
    if (!hash[num1[i]]) hash[num1[i]] = 1;
    else hash[num1[i]]++;
  }
  for (let j = 0; j < num2.length; j++) {
    if (!hash[num2[j]]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(32, 14)); //false
console.log(sameFrequency(22, 222)); //false

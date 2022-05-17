/*
Are there duplicates
accepts a variable number of arguments, checks whetehr there are any duplicates among the arguments passed in.
you can solve this using the frequency counter or multiple pointers pattern
*/

// frequencyc counter
const areThereDuplicates = (...args) => {
  let hash = {};
  for (let i = 0; i < args.length; i++) {
    if (!hash[args[i]]) hash[args[i]] = 1;
    else return true;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true

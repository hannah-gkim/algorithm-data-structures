//time O(2^n), space O(n)?
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log("memo->", memo);
  return memo[n];
};

//console.log(fib(2)); //1
console.log(fib(6)); //8
//console.log(fib(8)); //21
//console.log(fib(50));

//1,1,2,3,5,8,13
//1 2 3 4 5 6 7th fib

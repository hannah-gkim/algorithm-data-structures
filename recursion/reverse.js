function reverse(str) {
  if (str.length <= 1) return str;
  // console.log(str.slice(1));
  return reverse(str.slice(1)) + str[0];
  //wesome + a
  //esome + w + a
  //some + e + w + a
}

console.log(reverse("awesome")); //'emosewa'
console.log(reverse("rithmschool")); //'loohcsmhtir'

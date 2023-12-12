function isPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  return string === reverse;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false

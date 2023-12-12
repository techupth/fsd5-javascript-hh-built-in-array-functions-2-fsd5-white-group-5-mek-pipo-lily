function isPalindrome(string) {
  // Start coding here
  let backwardString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    backwardString += string[i];
  }
  return string === backwardString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false

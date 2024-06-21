const checkPalindrome = (str) => {
  if (typeof str == "number") {
    str = str.toString();
  }

  if (typeof str != "string") return "Not String";

  let isPalindrome = true;
  for (let i = 0; i < parseInt(str.length / 2); i++) {
    if (str[i] != str[str.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

console.log(checkPalindrome("abc"));
console.log(checkPalindrome("abcgcba"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("abc"));
console.log(checkPalindrome(121));




var isPalindrome = function(s) {
  let str = ''
  s =  s.toLowerCase();
  for(let i=0; i<s.length;i++){
      const el  = s[i]

      if(el>='a' && el<='z'){
          str+=el
      }
      // if(el>='A' && el<='Z'){
      //     str+=el
      // }
      if(parseInt(el)>= 0 && parseInt(el)<=9){
          str+=el
      }
  }


  // let isPalindrome = true
  for(let i = 0; i<parseInt(str.length/2); i++){
      if(str[i] != str[str.length-1-i]){
      //  isPalindrome = false;
      //  break
      return false
      }
  }
  // return isPalindrome
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
console.log(isPalindrome("12$#$21"))







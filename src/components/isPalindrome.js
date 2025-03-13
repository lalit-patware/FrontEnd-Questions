function isPalindrome(str) {
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
  
    // Check if the original string is equal to its reverse
    return str === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("madam")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: false (case-sensitive and includes spaces)

  
  function isPalindrome(str) {
    const len = str.length
    for(let i=0; i < len/2; i++){
        if(str[i] !== str[len-1-i] ){
            return false
        }
    }
    return true
}
console.log(isPalindrome("A man, a plan, a canal, Panama"))

const input=  [0, 2, 3, 2, 1]

function checkArrPalindrome(arr){
  const len = arr.length
    for(let i=0; i<len/2; i++){
      if(arr[i] !== arr[len -1 -i ] ) return false
    }
    return true
}
console.log(checkArrPalindrome(input))
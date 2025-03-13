function checkForPalindrome(str){
    return str === str.split('').reverse().join('')
}

function checkForPalindromeWithout(str){
    const len = str.length
    for(i=0; i<len/2;i++){
        if(str[i] !== str[len-1-i]){
            return false
        }
    }
    return true
}

console.log(checkForPalindrome('madam'))
console.log(checkForPalindromeWithout('madam'))


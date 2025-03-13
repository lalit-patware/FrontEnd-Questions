function firstNonRepeatingChar(str) {
    let charCount = {};

    // Step 1: Count occurrences of each character
     for(let i=0; i<str.length; i++){
       charCount[str[i]] = (charCount[str[i]] || 0) + 1
     }

    // Step 2: Find the first character that appears only once
    for (let char of str) {
        if (charCount[char] === 1) {
            return result.push[char];
        }
    }
    return null //If no non-repeating character is found
}
    // return [...str].filter((item)=> charCount[item] === 1) // if wanted all non repating chars
    

const str = 'aabbbbbbgvcvd';
console.log(firstNonRepeatingChar(str)); // Output: 'g'

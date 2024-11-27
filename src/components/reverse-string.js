function reverseWordsInPlace(input) {
    // Split the input string into words
    const words = input.split(' ');
    
    // Reverse each word and join them back with spaces
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words with spaces and return the result
    return reversedWords.join(' ');
  }
  
  // Test the function
  const input = "You are winner!";
  const output = reverseWordsInPlace(input);
  console.log(output); // "uoY era !renniw"
  
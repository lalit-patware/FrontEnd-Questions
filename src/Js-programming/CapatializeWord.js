function capitalizeStr(str){
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(capitalizeStr('tEst is the best'))

function capitalizeStr(str){
    return str.toLowerCase().split(' ').map(word =>{
        if (word.length > 1) {
                // Capitalize the second character
                return word.charAt(0) + word.charAt(1).toUpperCase() + word.slice(2);
            } else {
                // For single-character words, return as is
                return word;
            }
    }).join(' ') 
}
console.log(capitalizeStr('test is the best'))

function capitalizeStr(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + str.slice(1)).join(' ')
}
console.log(capitalizeStr('test'))
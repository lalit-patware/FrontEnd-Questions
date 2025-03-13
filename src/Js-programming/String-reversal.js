const str = 'Lalit is from'

function reverseStringReduce(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

function reverseStringRecursive(str) {
  if (str === "") return "";
  return reverseStringRecursive(str.slice(1)) + str[0];
}

function revStringNotWords(str){
  let ary =  str.split(' ')
  let result = []
  for(let i = ary.length-1; i>=0 ; i--){
    result.push(ary[i])
  }
    return result.join(' ')
}


console.log(reverseStringReduce(str))
console.log(reverseStringRecursive(str))
console.log(revStringNotWords(str))
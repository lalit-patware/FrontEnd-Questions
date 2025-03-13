const inp = [21,31,56,23]
// o/p = [12,13,65,32]

const reverseArrVal = (arr) => {
    return arr.map((item)=> {
      let revChar =  item.toString().split('').reverse().join('');
      return parseInt(revChar, 10);
    })
}

console.log(reverseArrVal(inp))
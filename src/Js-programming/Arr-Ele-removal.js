const arr = [2,3,45,5]

const removeArrEl = (arr) => {
  let removeEle = 45; //rem by value
  return arr.filter((item, index)=> item !== removeEle)
}
const removeArrElByIn = (arr) => {
   let indvalue = 3; // remove by index
  return arr.filter((item, index)=> {
    // console.log(item, index)
    return arr.indexOf(item) !== indvalue
  })
}

// remove last Element
arr.splice(-1,1)

// remove second last Element
arr.splice(-2,1)

// remove first
arr.shift() || arr.splice(1)




console.log(removeArrEl(arr))
console.log(removeArrElByIn(arr))
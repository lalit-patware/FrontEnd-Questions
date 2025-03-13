const arr = [1,2,3]
const op = {
  0: '1', 1: '2', 2: '3'
}

const arrToObj = (arr) =>{
  return arr.reduce((acc, item, index)=> {acc[index]= item ; return acc;} , {})
}

console.log(arrToObj(arr))

// const arr = [1,2,3]
const obj = {
    0: '1', 1: '2', 2: '3'
  }
  
  const objToArr = (obj) =>{
    let temp = []
    for(key in obj){
      temp.push(parseInt(obj[key]))
    }
    return temp
  }
  
  console.log(objToArr(obj))
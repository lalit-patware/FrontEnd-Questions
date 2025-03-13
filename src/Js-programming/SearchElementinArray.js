//   Search an Element
// Write a program to search for an element in an array and return its index. If the element is not found, display a message.
const arr = [1,2,3,4,8,10]
const target = 10
function searchEle(arr, tar){
  for(let i=0; i < arr.length; i++){
    if(arr[i] === tar){
      return `Element found at index ${i}`
    }
  }
  return 'Element not found'
}
console.log(searchEle(arr, target))
function searchEleIndex(){
  let index = arr.indexOf(target);
  return index !== -1 ? `Element found at index ${index}` : "Element not found";
}
console.log(searchEleIndex(arr, target))

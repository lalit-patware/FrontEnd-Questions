// 6.    Frequency of Elements
// Write a program to count the frequency of each element in an array. Example:
const input= [1, 9, 6, 3, 4, 4, 2,0,4,1,6,3,9] // 'qqqqaaabvvcvaaaa'
// Output: 1: 1, 2: 2, 3: 1, 4: 3
function freqOfEle(arr){
 let freqObj={}
 for(let i=0; i<arr.length; i++){
   freqObj[arr[i]] = (freqObj[arr[i]] || 0) + 1
 }
 return freqObj
//  return Object.entries(freqObj).map(([key, value]) => `${key}: ${value}`).join(', ')
}

console.log(freqOfEle(input))
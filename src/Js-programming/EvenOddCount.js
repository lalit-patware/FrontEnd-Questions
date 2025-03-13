// Count Even and Odd Numbers
// Write a program to count the number of even and odd numbers in an array of integers.

const arr = [2,3,4,5,6,7,11,99,100]

function finEvenOddCount(arr){
  let evenC = 0;
  let oddC = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      evenC++
    }
    else {
      oddC++
    }
  }
  return {evenC, oddC}
}


console.log(finEvenOddCount(arr))
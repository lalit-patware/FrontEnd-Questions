function bubbleSort(arr) {
    let n = arr.length
    for(i=0; i<n-1 ; i++ ){
        for(j=0; j< n-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
const arr = [6,2,6, 4,3, 5, ]
console.log(bubbleSort(arr))

function findMedian(arr) {
    // predefined method
    // arr.sort((a,b) =>a-b )
    // Sort array using bubble sort
    const sortedArr = bubbleSort(arr);
  
    const length = sortedArr.length;
    const middle = Math.floor(length / 2);
  
    // If the array length is odd, return the middle element
    if (length % 2 !== 0) {
      return sortedArr[middle];
    }
  
    // If the array length is even, return the average of the two middle elements
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  }
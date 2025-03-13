function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    if(arr.length < 2) return;
    for(let i=1; i< arr.length; i++){
      if(arr [i]> max){
        max = arr[i]
      }
      else if(arr[i] < min){
        min = arr[i]
      }
    }
    return {max, min}
}
console.log(findMaxMin([4,3,2]))
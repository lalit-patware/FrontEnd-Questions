function maxOfArray(arr){
    return Math.max(...arr)
}

function maxOfArrayWithout(arr){
    if (arr.length === 0) return undefined;
    let max = arr[0] 
    for(let i=1; i< arr.length; i++){ 
        // start from second as we have consider 1st as max
        if(arr[i] > max){
             max = arr[i]
        }
    }
    return max
}

console.log(maxOfArray([10,20,30,90,30]))
console.log(maxOfArrayWithout([10,20,30,90,30]))
function AddTwoNumber(a,b){
    return a+b;
}

function sumOfArray(arr){
    return arr.reduce((acc, val)=> acc+val , 0)
}

function sumWithoutReduce(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        // console.log('test', arr[i])
        sum += arr[i]
    }
    return sum;
}

console.log(AddTwoNumber(10,20));
console.log(sumOfArray([10,90,90]));
console.log(sumWithoutReduce([10,90,90]));

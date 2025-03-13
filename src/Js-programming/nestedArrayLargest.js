function largestInNestedArr(arr){
    let finalArray = arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(largestInNestedArr(val)) : acc.concat(val),
    []);
    // let finalArray = arr.flat(Infinity)
    // let largestArr = Math.max(...finalArray)
    // return largestArr
    let max = finalArray[0]
    for(let i=1; i<finalArray.length; i++){
        if(finalArray[i] > max){
            max = finalArray[i]
        }
    }
    return max
}

function secondLargestInNestedArr(arr){
    let finalArray = arr.flat(Infinity)
    let max = -Infinity
    let secondMax = -Infinity
    for(let i= 0; i<finalArray.length; i++){
        if(finalArray[i] > max){
            secondMax = max
            max = finalArray[i] 
        } else if(finalArray[i] > secondMax && finalArray[i] !==max ){
            secondMax = finalArray[i]
        }
    }
    return secondMax
}

const nestedArray = [
    [1, 2, 3],         // First nested array
    [4, 5, 6],         // Second nested array
    [7, [8, 9, [20,30,23]], 10]    // Third nested array with another nested array inside it
];
console.log(largestInNestedArr(nestedArray));
console.log(secondLargestInNestedArr(nestedArray));









function factorial(num){
    // 4*3*2*1
    if(num <0) return;
    if(num ===0 || num === 1){
        return 1
    }
    else{
        return num*factorial(num-1)
    }
}

// better for large numbers
function iterativeFac(num){
    if(num <0) return;
    let res = 1;
    for(i=1; i<=num; i++){
        // res = res*i (same)
        res *= i
    }
    return res
}
console.log(factorial(5));
console.log(iterativeFac(5))
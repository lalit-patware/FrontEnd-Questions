function isPrime(num){
    // divide by itself or 1
    if(num <= 1) return false;
    for(let i=2; i<= Math.sqrt(num); i++){  
        // i<= num -1 (it is valid but in efficent as number is divisiable of sq as well)
        if(num%i ===0) return false
    }
    return true
}
console.log(isPrime(5));
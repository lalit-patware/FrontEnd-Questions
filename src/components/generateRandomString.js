function radomStringGenerator(len){
    const chart = 'ABCDEFGHIJKKLLML13456678980'
    let randomString = ''
    for(i= 0; i< len ; i++){
        const randomIndex = Math.floor(Math.random() *chart.length) 
        randomString += chart[randomIndex]
    }
    return randomString
}

console.log(radomStringGenerator(1));
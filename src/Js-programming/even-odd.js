function evenArray(x) {
    let temp = []
    x.map((arr)=>{
         if(arr%2 === 0) {
          temp.push(arr)
        }
    });
    return temp
}

function evenWithFilter(x){
    return x.filter((arr)=>
         arr%2 ===0 
    )
}

console.log(evenArray([10,12,15]));
console.log(evenWithFilter([10,12,15]))
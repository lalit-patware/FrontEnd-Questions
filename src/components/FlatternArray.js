const flattenArray = (arr) => {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
    },[])
}

export default flattenArray

// Recursive ==========================================
function flattenArray(arr, temp=[]){
    for(let i=0;i<arr.length; i++){
        if(typeof arr[i] === "object"){
            flattenArray(arr[i], temp)
        }
        else {
            temp.push(arr[i])
        }
    }
    return temp
}

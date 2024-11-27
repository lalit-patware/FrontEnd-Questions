const aggScore = (arrObj) =>{
    return arrObj.reduce((acc, val)=>{
        let existingEntry = acc.find(item => item.name === val.name)
        if(existingEntry){
            existingEntry.score += val.score
        }
        else{
            acc.push({name: val.name, score: val.score})
        }
        return acc
    }, [])
}


// Write a Program for Anagram?
const str1 = "manager"
const str2 = "namareg"

// loop > sort > compare

function Anagram(str1, str2){
    const freq1 = {}
    const freq2 = {}
    for(let i=0; i<str1.length; i++){
      // console.log('n',str1 )
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }
    
    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    
    return true;
}

console.log(Anagram(str1, str2))
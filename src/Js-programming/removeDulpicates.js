function removeDuplicate(arr) {
    // 2nd
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
    // // 3rd
    let len = arr.length
    let temp = []
    for (i = 1; i < len; i++) {
        if (!temp.includes(arr[i])) {
            temp.push(arr[i])
        }
    }
    return temp
    // 1st
    return [...new Set(arr)];
}
// ===============================
const users = [ 
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Jane', age: 25 }
];

function removeArr(arr) {
    return arr.filter((item, index, self) => {
        return self.findIndex(obj => obj.age === item.age) === index
    });
}

function removeArr(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!temp.some(obj => obj.age === arr[i].age)) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(removeArr(users))
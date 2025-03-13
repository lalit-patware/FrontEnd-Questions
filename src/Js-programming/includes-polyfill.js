if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
        return this.indexOf(value) !== -1;
    };
}

// Usage
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true

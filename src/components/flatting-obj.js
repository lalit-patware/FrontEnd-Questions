function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key; // Create new key with dot notation
  
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(acc, flattenObject(value, newKey)); // Recursive flattening
      } else {
        acc[newKey] = value; // Add key-value pair to the accumulator
      }
  
      return acc;
    }, {});
  }
  
  // Example usage
  const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    },
    g: 5
  };
  
  const flattened = flattenObject(nestedObject);
  console.log(flattened);
  // Output: { a: 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f': 4, g: 5 }
  
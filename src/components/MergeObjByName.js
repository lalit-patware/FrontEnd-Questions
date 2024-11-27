const mergeObjectsByName = (objArr) => 
    objArr.reduce((acc, obj) => {
      // Check if an object with the same name already exists in the accumulator
      const existingObj = acc.find(item => item.name === obj.name);
  
      if (existingObj) {
        existingObj.score += obj.score; // Add score if name already exists
      } else {
        acc.push({ ...obj }); // Push new object if name doesn't exist
      }
  
      return acc;
    }, []);
  
  // Test the function
  const objArr = [
    { name: 'abc', score: 20 },
    { name: 'pqr', score: 30 },
    { name: 'abc', score: 40 },
    { name: 'pqr', score: 50 }
  ];
  
  const result = mergeObjectsByName(objArr);
  console.log(result);
  
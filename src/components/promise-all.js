import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Fetching data using Promise.all and Promise.allSettled
  useEffect(() => {
    // Simulating two API calls
    const fetchApi1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
      res.json()
    );
    const fetchApi2 = fetch('https://jsonplaceholder.typicode.com/users/1').then((res) =>
      res.json()
    );

    // Using Promise.all for all promises to resolve or reject
    Promise.all([fetchApi1, fetchApi2])
      .then((results) => {
        setData(results); // If all promises are resolved successfully
      })
      .catch((err) => {
        setError('Failed to fetch data');
        console.error(err);
      });

    // Using Promise.allSettled to capture resolved and rejected promises
    // Promise.allSettled([fetchApi1, fetchApi2]).then((results) => {
    //   results.forEach((result, index) => {
    //     if (result.status === 'fulfilled') {
    //       console.log(`API ${index + 1} fetched successfully:`, result.value);
    //     } else {
    //       console.error(`API ${index + 1} failed:`, result.reason);
    //     }
    //   });
    // });
  }, []);

  return (
    <div>
      <h1>Fetch Data from Multiple APIs</h1>

      {/* Display data if successfully fetched */}
      {data.length > 0 ? (
        <div>
          <h2>Post Data</h2>
          <p>Title: {data[0]?.title}</p>
          <p>Body: {data[0]?.body}</p>

          <h2>User Data</h2>
          <p>Name: {data[1]?.name}</p>
          <p>Email: {data[1]?.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Display error message if fetch fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default FetchDataComponent;

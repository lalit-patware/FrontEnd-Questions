import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating two API calls
    const fetchApi1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
      res.json()
    );
    const fetchApi2 = fetch('https://jsonplaceholder.typicode.com/users/1').then((res) =>
      res.json()
    );

    // Using Promise.allSettled to handle both resolved and rejected promises
    Promise.allSettled([fetchApi1, fetchApi2]).then((results) => {
        // [{status: 'fulfilled', value: []},{status: 'rejected'}]
      // Extracting only the fulfilled results (successful API calls)
      const fulfilledData = results
        .filter((result) => result.status === 'fulfilled')
        .map((result) => result.value);

      // Extracting errors if any
      const rejectedResults = results.filter((result) => result.status === 'rejected');
      
      // If there are any rejected promises, set an error message
      if (rejectedResults.length > 0) {
        setError('Some data failed to load.');
      }

      // Update the state with only fulfilled (successful) data
      setData(fulfilledData);
    });
  }, []);

  return (
    <div>
      <h1>Fetch Data from Multiple APIs</h1>

      {/* Display data if successfully fetched */}
      {data.length > 0 ? (
        <div>
          {data[0] && (
            <>
              <h2>Post Data</h2>
              <p>Title: {data[0]?.title}</p>
              <p>Body: {data[0]?.body}</p>
            </>
          )}

          {data[1] && (
            <>
              <h2>User Data</h2>
              <p>Name: {data[1]?.name}</p>
              <p>Email: {data[1]?.email}</p>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Display error message if any fetch fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default FetchDataComponent;

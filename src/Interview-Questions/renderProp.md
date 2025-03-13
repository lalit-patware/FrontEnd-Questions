### Render Props is a pattern in React where a function is passed as a prop to a component, allowing greater reusability and flexibility. It is an alternative to higher-order components (HOC) and composition.

✅ When you want to share logic between multiple components
✅ When you need component reusability
✅ When HOCs are overcomplicated

import React, { useState, useEffect } from "react";

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]); // Fetches data when URL changes

  return render({ data, loading, error }); // Pass data to render prop
};

export default DataFetcher;


<!-- import DataFetcher from "./DataFetcher"; -->

const App = () => {
  return (
    <div>
      <h2>Render Props with useEffect</h2>
      <DataFetcher
        url="https://jsonplaceholder.typicode.com/users"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return (
            <ul>
              {data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default App;

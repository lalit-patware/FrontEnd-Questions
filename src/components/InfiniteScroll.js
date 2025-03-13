import React, { useState, useEffect } from 'react';

const InfiniteScrollUsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const usersPerPage = 10; // Number of users to fetch per request

  const fetchUsers = async (page) => {
    // setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users?per_page=${usersPerPage}&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data]); // Append new users to the existing list
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page); // Fetch users on initial render and when page changes

    const handleScroll = () => {
      // Check if the user is near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setPage((prevPage) => prevPage + 1); // Increment the page number
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, [page]);

  if (loading && users.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
      {loading && <div>Loading more users...</div>} {/* Loading indicator for more data */}
    </div>
  );
};

export default InfiniteScrollUsersList;

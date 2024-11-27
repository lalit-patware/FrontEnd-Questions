import React, { useState, useEffect } from 'react';

const TaskBoard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setUsers(data.slice(0, 4));
      } catch {
        setError(!error);
      }
    };
    fetchData();
  }, []);
  const taskBoardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const userListStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Wraps cards into multiple rows
    listStyle: 'none',
    padding: '0',
    justifyContent: 'center',
  };

  const userCardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '300px', // Card width
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    margin: '0',
    fontSize: '1.2rem',
    color: '#333',
  };

  const textStyle = {
    margin: '5px 0',
    fontSize: '0.9rem',
  };
  const filteredUsers = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <>
      <input
        type="text"
        placeholder="Search by username, email or address"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={taskBoardStyle}>
        <ul style={userListStyle}>
          {filteredUsers &&
            filteredUsers.map((data) => (
              <li key={data.id} style={userCardStyle}>
                <h2 style={titleStyle}>{data.username}</h2>
                <p style={textStyle}>{data.email}</p>
                <p style={textStyle}>
                  Address: {`${data.address.street}, ${data.address.city}`}
                </p>
              </li>
            ))}
        </ul>
        {error && <p>Error fetching users</p>}
      </div>
    </>
  );
};
export default TaskBoard;

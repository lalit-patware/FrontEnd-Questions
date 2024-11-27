import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [checkedUsers, setCheckedUsers] = useState({});

  useEffect(() => {
    // Fetch users from the dummy API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleCheckboxChange = (id) => {
    setCheckedUsers((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input
              type="checkbox"
              checked={checkedUsers[user.id] || false}
              onChange={() => handleCheckboxChange(user.id)}
            />
            {user.name.split(' ')[0]}{' '}
            {checkedUsers[user.id] && user.name.split(' ')[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

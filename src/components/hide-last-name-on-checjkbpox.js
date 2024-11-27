import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showLastNames, setShowLastNames] = useState({}); // Object to track last name visibility for each user

  // Fetch users from the dummy API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        
        // Initialize showLastNames state for each user
        const initialShowLastNames = {};
        data.forEach(user => {
          initialShowLastNames[user.id] = false; // All last names are hidden initially
        });
        setShowLastNames(initialShowLastNames);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Toggle last name visibility for a specific user
  const handleCheckboxChange = (userId) => {
    setShowLastNames(prevState => ({
      ...prevState,
      [userId]: !prevState[userId] // Toggle the visibility for the specific user
    }));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <label>
              <input
                type="checkbox"
                checked={showLastNames[user.id]}
                onChange={() => handleCheckboxChange(user.id)}
              />
              {user.name} {showLastNames[user.id] && user.username} {/* Assuming 'username' is a property */}
              {/* Change 'user.username' to 'user.lastname' if that field exists */}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

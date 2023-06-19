import React, { useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  return (
    <div>
      <nav className="navbar">
        <div className="brand">
          <span>Brand Name</span>
        </div>
        <div className="button">
          <button onClick={getUsers}>Get Users</button>
        </div>
      </nav>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="user-card-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <img className="user-avatar" src={user.avatar} alt={user.first_name} />
              <h3 className="user-name">{`${user.first_name} ${user.last_name}`}</h3>
              <p className="user-email">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

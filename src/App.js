import React, { useState } from 'react';
import UserTable from './UserTable';
import './App.css'; // Importieren Sie Ihre CSS-Datei

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name, status) => {
    const newUser = {
      id: users.length + 1,
      name,
      status,
    };
    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const updateStatus = (id, newStatus) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <div className="center-content"> {/* Flexbox-Container für Zentrierung */}
        <h1>Availability Monitor v1</h1>
        <div>
          <input type="text" placeholder="Name" id="name" />
          <input type="text" placeholder="Status" id="status" />
          <button
            onClick={() => {
              const name = document.getElementById('name').value;
              const status = document.getElementById('status').value;
              addUser(name, status);
            }}
          >
            Benutzer hinzufügen
          </button>
        </div>
      </div>
      <UserTable users={users} onRemoveUser={removeUser} onUpdateStatus={updateStatus} />
    </div>
  );
}

export default App;

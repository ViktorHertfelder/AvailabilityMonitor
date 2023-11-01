import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Zustand aus dem Local Storage wiederherstellen, wenn die Komponente montiert wird
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      setUsers(JSON.parse(savedState));
    }
  }, []); // Leere Abhängigkeitsliste sorgt dafür, dass dies nur einmal beim Laden der Komponente passiert

  const saveStateToLocalStorage = (state) => {
    // Zustand im Local Storage speichern
    localStorage.setItem('appState', JSON.stringify(state));
  };

  const addUser = (name, status) => {
    const newUser = {
      id: users.length + 1,
      name,
      status,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveStateToLocalStorage(updatedUsers); // Zustand nach Änderungen speichern
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    saveStateToLocalStorage(updatedUsers); // Zustand nach Änderungen speichern
  };

  const updateStatus = (id, newStatus) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    saveStateToLocalStorage(updatedUsers); // Zustand nach Änderungen speichern
  };

  return (
    <div className="App">
      <div className="center-content">
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

function UserTable({ users, onRemoveUser, onUpdateStatus }) {
  // Stil-Objekte für Zellen und Eingabefelder
  const cellStyle = {
    padding: '12px', // Ändern Sie die Polsterung nach Bedarf
    textAlign: 'left',
    fontSize: '16px', // Ändern Sie die Schriftgröße nach Bedarf
  };

  const inputStyle = {
    width: '100%',
    fontSize: '16px', // Ändern Sie die Schriftgröße nach Bedarf
  };

  return (
    <table>
      <thead>
        <tr>
          <th style={cellStyle}>Name</th>
          <th style={cellStyle}>Status</th>
          <th style={cellStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td style={cellStyle}>{user.name}</td>
            <td style={cellStyle}>
              <input
                type="text"
                value={user.status}
                onChange={(e) => onUpdateStatus(user.id, e.target.value)}
                style={inputStyle}
              />
            </td>
            <td style={cellStyle}>
              <button onClick={() => onRemoveUser(user.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;

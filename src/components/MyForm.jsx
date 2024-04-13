import React, { useState } from "react";

function UserForm() {
  const [users, setUsers] = useState([]);

  async function handleAddUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");

    // Simula uma chamada de API com delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUsers((prev) => [...prev, { name, email }]);
  }

  return (
    <div>
      <form action={handleAddUser}>
        <div>
          <input name="name" placeholder="Nome" required />
        </div>
        <div>
          <input name="email" type="email" placeholder="Email" required />
        </div>
        <button type="submit">Adicionar Usuário</button>
      </form>

      <h3>Usuários Adicionados:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;

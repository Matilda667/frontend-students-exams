import { useState } from "react";

export const UsersList2=()=> {
  const results = useState<string[]>(["Bob", "Alex", "Ann"]);
  const users = results[0];
  const setUsers = results[1];

  return (
    <div>
      <p>Количество пользователей: {users.length}</p>
      <p>Количество пользователей: {setUsers.length}</p>
      {/* Можно добавить список или другую информацию */}
    </div>
  );
}

// Чему равно results.length?

import { useState } from "react"

export const UsersList=()=> {
  const [users, /*setUsers*/] = useState<string[]>(["Bob", "Alex", "Ann"])
  return (
    <div>
      <h4>User list:</h4>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  )
}

// Что надо вставить вместо ХХХ, чтобы код заработал?



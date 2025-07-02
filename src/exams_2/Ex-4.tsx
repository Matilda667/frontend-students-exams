import { useState } from "react"

export function UsersList4() {
  const [users, /*setUsers*/] = useState<string[]>(["Bob", "Alex", "Ann"])
  const getUser = (user: string) =>
    <li>{user}</li>
  const usersList4 = users.map(getUser)
  return (
    <div>
      <h4>User list:</h4>
      <div>Значение: {String(Array.isArray(usersList4))}</div>

    </div>
  )
}

// Что вернёт выражение: Array.isArray(usersList)?
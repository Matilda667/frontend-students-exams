import { useState } from "react"

export function UsersList3() {
  const [users, /*setUsers*/] = useState<Array<string>>(["Bob", "Alex", "Ann"])
  const getUser = (user: string) => <li>{user}</li>
  const usersList3 = users.map(getUser)
  return (
    <div>
      <h4>User list:</h4>
      <ul>{usersList3}</ul>
    </div>
  )
}

// Какую переменную необходимо указать вместо XXX, чтобы код заработал?
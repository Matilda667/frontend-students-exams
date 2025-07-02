import { useState } from "react"

export function UsersList6() {
  const [users, /*setUsers*/] = useState<string[]>(["Bob", "Alex", "Ann"])
  return (
    <div>
      {/*<p>Тут будет список пользователей</p>*/}
      <div>{String(Array.isArray(users))}</div>
    </div>

  )
}

// Что вернёт выражение: Array.isArray(users)?
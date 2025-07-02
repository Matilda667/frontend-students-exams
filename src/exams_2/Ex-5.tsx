import { useState } from "react"


export function UsersList5() {
  const [/*users, setUsers*/] = useState<string[]>(["Bob", "Alex", "Ann"])
  const getUser = (user: string) => <li>{user}</li>
  return (
    <div>
      {/*<h4>User list:</h4>*/}
      {/*<ul>{users.map(getUser)}</ul>*/}
      <p>{typeof getUser}</p>
    </div>
  )
}

// Что вернёт выражение: typeof getUser?
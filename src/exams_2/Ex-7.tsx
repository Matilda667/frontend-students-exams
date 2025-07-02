import { useState } from "react"

type User = {
  id: number
  name: string
  age: number
}
export const UsersList7 = () => {
  const state = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 25 },
    { id: 3, name: "Ann", age: 30 },
    { id: 4, name: "John", age: 23 },
  ]
  const users = [
    { id: 1, userName: "Bob", age: 34 },
    { id: 2, userName: "Alex", age: 25 },
    { id: 3, userName: "Ann", age: 30 },
    { id: 4, userName: "John", age: 23 },
  ]

  // useState для state
  const [usersListState, /*setUsersListState*/] = useState<User[]>(state)

  // useState для users, с преобразованием userName -> name
  const [usersListUsers, /*setUsersListUsers*/] = useState<User[]>(
    users.map(({ id, userName, age }) => ({
      id,
      name: userName, // переименование userName -> name
      age,
    }))
  )

  return (
    <>
      <h2>User list from state:</h2>
      <ul>
        {usersListState.map(user => (
          <li key={user.id}>
            {user.name}, {user.age} лет
          </li>
        ))}
      </ul>

      <h2>User list from users:</h2>
      <ul>
        {usersListUsers.map(user => (
          <li key={user.id}>
            {user.name}, {user.age} лет
          </li>
        ))}
      </ul>
    </>
  )
}

// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода
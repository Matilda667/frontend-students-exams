import { useState } from "react"

export function UsersList8() {
  const results = useState<string[]>(["Bob", "Alex", "Ann"])
  const users = results[0]  // это массив пользователей
  // const setUsers = results[1]  // функция для обновления пользователей

  return (
    <div>
      <p>Тут будет список пользователей</p>
      {/* Выводим массив пользователей */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            {/* Используем index как ключ */}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Какой тип правильнее указать вместо "any" при типизации стэйта?
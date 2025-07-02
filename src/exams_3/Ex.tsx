import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 24 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]
  const [users] = useState<User[]>(data)
  // Пользователи старше 25 лет:
  const olderThen25Users = users.xxx((u) => u.age > 25)
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {olderThen25Users.map((u) => {
          return (
            <li key={u.id}>
              User {u.name}: {u.age} y.o.
            </li>
          )
        })}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы отрисовались пользователи старше 25 лет?

export const user = {}
export const customer = user
export const student = {}
if (XXX === user) {
  console.log("Yo!!!")
}
// Какую переменную надо указать вместо XXX, кроме user, что бы в консоль вывелась строка "Yo!!!?

import { MouseEvent } from "react"
import { createRoot } from "react-dom/client"
const Button = () => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(typeof e === ххх)
  }
  return <button onClick={onClickHandler}>Click</button>
}
createRoot(document.getElementById("root")!).render(<Button />)
// Что надо написать вместо ххх, чтобы в консоль вывело true?

import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
type UserProps = User & {
  deleteUser: (id: number) => void
}
const User = ({ deleteUser, age, name, id }: UserProps) => {
  return (
    <li>
      User {name}: {age} y.o.
      <button onClick={() => deleteUser(id)}>x</button>
    </li>
  )
}
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]
  const [users, setUsers] = useState<User[]>(data)
  const deleteUser = (userID: number) => {
    const filteredUsers = users.filter((u) => u.id !== userID)
    setUsers(xxx)
  }
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {users.map((u) => (
          <User key={u.id} {...u} deleteUser={deleteUser} />
        ))}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы код работал?

import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 29 },
    { id: 3, name: "Ann", age: 25 },
    { id: 4, name: "John", age: 36 },
  ]
  const [users] = useState<User[]>(data)
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {users.map((u) => {
          return (
            <li xxx={u.id}>
              Student {u.name}: {u.age} y.o.
            </li>
          )
        })}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы код работал оптимально?

import { MouseEvent, useState } from "react"
import { createRoot } from "react-dom/client"
const Button = () => {
  const [tagName, setTagName] = useState<string>()
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setTagName(e.xxx.tagName)
  }
  return (
    <>
      <p>{tagName}</p>
      <button onClick={onClickHandler}>
        <span>Click</span>
      </button>
    </>
  )
}
createRoot(document.getElementById("root")!).render(<Button />)
// Что надо написать вместо ххх, что бы на странице появился текст BUTTON?

import { createRoot } from "react-dom/client"
function Button() {
  return <button onClick={xxx}>Click</button>
}
createRoot(document.getElementById("root")!).render(<Button />)
// Что надо написать вместо ххх,
// чтобы на странице появился пустой alert при клике по кнопке?

import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]
  const [users] = useState<User[]>(data)
  const olderThen25Users = users.filter((u: User) => u.age > 25)
  const isArray = Array.isArray(olderThen25Users)
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {olderThen25Users.map((u) => {
          return (
            <li key={u.id}>
              User {u.name}: {u.age} y.o.
            </li>
          )
        })}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// Что будет записано в переменную isArray в данном коде?

import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]
  const [users] = useState<User[]>(data)
  // Необходимо отрендерить список пользователей старше 25 лет:
  const getOlderThen25Users = (u: xxx) => u.age > 25
  const olderThen25Users = users.filter(getOlderThen25Users)
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {olderThen25Users.map((u) => {
          return (
            <li key={u.id}>
              User {u.name}: {u.age} y.o.
            </li>
          )
        })}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы код работал?

import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
type UserProps = User & {
  deleteUser: (id: any) => void
}
const User = ({ deleteUser, age, id, name }: UserProps) => (
  <li>
    <button onClick={() => deleteUser(id)}>x</button>
    User {name}: {age} y.o.
  </li>
)
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]
  const [users, setUsers] = useState<User[]>(data)
  const deleteUser = (userID: number) => {
    setUsers(users.filter((u) => u.id !== userID))
  }
  return (
    <main>
      <h4>Users list:</h4>
      <ul>
        {users.map((u) => (
          <User key={u.id} {...u} deleteUser={deleteUser} />
        ))}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// В типе UserProps у функции deleteUser в параметрах указан тип "any".
// Какой тип было бы указать правильнее?

import { useState } from "react"
import { createRoot } from "react-dom/client"
type User = {
  id: number
  name: string
  age: number
}
const User = (props: User) => (
  <li>
    Student {props.name}: {props.age} y.o.
  </li>
)
const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 29 },
    { id: 3, name: "Ann", age: 25 },
    { id: 4, name: "John", age: 36 },
  ]
  const [users] = useState<User[]>(data)
  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {users.map((u) => (
          <User key={u.id} {...xxx} />
        ))}
      </ul>
    </main>
  )
}
createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы код работал?
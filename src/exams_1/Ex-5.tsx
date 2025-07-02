
type UserProps = {
  name: string
  description: string
}

export const UserName = (props: UserProps) => {
  return <div><p>Имя: {props.name}</p> <p>Описание: {props.description}</p>

  </div>
}
// Что нужно написать вместо '❗X', что бы в браузере отобразилось описание, которое передали в пропсах ?


type PagePropsType = {
  age: number
  name: string
  avatarUrl: string
}
type UserPropsType = {
  a: number
  n: string
}

export const Page: React.FC<PagePropsType> = (props: PagePropsType ) => {
  return <User a={props.age} n={props.name} />
}

export const User: React.FC<UserPropsType> = (props) => {
  return <div>name: {props.n}, age: {props.a}</div>
}
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//
// );
// // Что нужно написать вместо xxx и yyy?
// // Ответ дайте через пробел, например: blabla onClick(props)
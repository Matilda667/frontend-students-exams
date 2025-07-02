

type News = {
  title: string
  author: string
}
type Article = {
  title: string
  date: string
  text: string
}
type PageProps = {
  news: News[]
  mainArticle: Article
}
export const Page2 = (props: PageProps) => {
  return (
    <div>
      <article>
        <h1>Название: {props.mainArticle.title}</h1>
        <div>{props.mainArticle.date}</div>
        <div>{props.mainArticle.text}</div>
      </article>
      <aside>
        <h2>Articles:</h2>
        <ul>
          {props.news.map((n) => (
            <li>
              {n.title}, {n.author}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}


// // Что нужно написать вместо XXX и YYY, чтобы отобразить данные?
// // Ответ дайте через пробел, например: component props
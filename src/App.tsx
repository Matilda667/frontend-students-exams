import { UserMoney } from "./exams_1/Ex-1.tsx"
import { Component } from "./exams_1/Ex-2.tsx"
import { Page } from "./exams_1/Ex-3.tsx"
import { Page2 } from "./exams_1/Ex-4.tsx"
import { UserName } from "./exams_1/Ex-5.tsx"
import { CrazyButton } from "./exams_1/Ex-6.tsx"
import { Block } from "./exams_1/Ex-7.tsx"
import { UsersList } from "./exams_2/Ex-1.tsx"
import { UsersList2 } from "./exams_2/Ex-2.tsx"
import { UsersList3 } from "./exams_2/Ex-3.tsx"
import { UsersList4 } from "./exams_2/Ex-4.tsx"
import { UsersList5 } from "./exams_2/Ex-5.tsx"
import { UsersList6 } from "./exams_2/Ex-6.tsx"
import { UsersList7 } from "./exams_2/Ex-7.tsx"
import { UsersList8 } from "./exams_2/Ex-8.tsx"

export const App = () => {
  return (
    <div>
      <div className="exams_1">
        <UserMoney />
        <Component city="Minsk" country="Belarus" />
        <Page age={40} name="Brendan" avatarUrl={"test"} />
        <Page2
          news={[
            { author: "Ivanov", title: "news title 1" },
            { author: "Petrov", title: "news title 2" },
          ]}
          mainArticle={{ title: "article title 1", text: "text 1", date: "21.01.2001" }}
        />
        <UserName name={"John"} description={"lorem ipsum"} />
        <CrazyButton title={"delete"} fontColor={"white"} bgColor={"red"} />
        <CrazyButton title={"add"} fontColor={"white"} bgColor={"green"} />
        <Block />
      </div>
      <div className="exams-2">
        <UsersList />
        <UsersList2 />
        <UsersList3 />
        <UsersList4 />
        <UsersList5 />
        <UsersList6 />
        <UsersList7 />
        <UsersList8 />
      </div>
    </div>
  )
}

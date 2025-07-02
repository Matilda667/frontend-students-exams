
type UserWallet = {
  title: string
  amount: number
}
type UserWalletProps = {
  wallet: UserWallet
}
export const UserWallet = ({ wallet }: UserWalletProps) => {
  return (
    <p>
      title: {wallet.title}, amount: {wallet.amount}
    </p>
  )
}
export const UserMoney = () => {
  const wallets:{title:string, amount: number}[] = [
    { title: "bitcoin", amount: 1 },
    { title: "$", amount: 100 },
  ]

  return (
    <div>
      {wallets.map((wallet) => (
        <UserWallet key={wallet.title} wallet={wallet} />
      ))}
    </div>
  )
}



// Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
// Ответ дайте через пробел, например: props.x wallets
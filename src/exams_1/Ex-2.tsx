
type Props = {
  city: string // 'Minsk'
  country: string // 'Belarus'
  coords?: string // '53.917501,27.604851'
}


export const Component = ({ city, country, coords }: Props) => {
  return (
    <div>
      <p>{city}</p>
      <p>{country}</p>
      <p>{coords}</p>
    </div>
  )
}
// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 10 (cтрока с ошибкой), чтобы не было ошибки
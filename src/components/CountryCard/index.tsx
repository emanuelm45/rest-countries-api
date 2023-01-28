import { ICountryCard } from '../../interfaces'
import Styled from './style'
import { formatNumber } from '../../utils'

export default function CountryCard({
  image,
  name,
  population,
  region,
  capital
}: ICountryCard) {
  return (
    <Styled.Article>
      <header>
        <img src={image} alt={`${name} flag`} title={`${name} flag`} />
      </header>
      <div>
        <h2>{name}</h2>
        <p>
          <span>Population:</span> {formatNumber(population)}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        {capital ? (
          <p>
            <span>{capital.length > 1 ? 'Capitals:' : 'Capital:'}</span>{' '}
            {capital?.join(', ')}
          </p>
        ) : (
          <p>
            <span>No capital</span>
          </p>
        )}
      </div>
    </Styled.Article>
  )
}

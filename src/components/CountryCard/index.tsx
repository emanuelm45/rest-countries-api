import { ICountryCard } from '../../interfaces'
import { StyledArticle } from './style'

export default function CountryCard({
  image,
  name,
  population,
  region,
  capital
}: ICountryCard) {
  return (
    <StyledArticle>
      <header>
        <img src={image} alt={`${name} flag`} title={`${name} flag`} />
      </header>
      <div>
        <h2>{name}</h2>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        {capital && (
          <p>
            <span>{capital.length > 1 ? 'Capitals:' : 'Capital:'}</span>{' '}
            {capital?.join(', ')}
          </p>
        )}
      </div>
    </StyledArticle>
  )
}

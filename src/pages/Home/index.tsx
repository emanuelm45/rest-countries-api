import { CountryCard } from '../../components'
import { useGetAllCountries } from '../../hooks/countries'
import { ICountry } from '../../interfaces'
import { StyledMain } from './style'
import { Link } from 'react-router-dom'

export default function Home() {
  const { data, isLoading } = useGetAllCountries()

  if (isLoading) return null

  return (
    <StyledMain>
      <div>
        {data.map((country: ICountry, index: number) => {
          return (
            <Link to={country.cca2} key={index}>
              <CountryCard
                image={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          )
        })}
      </div>
    </StyledMain>
  )
}

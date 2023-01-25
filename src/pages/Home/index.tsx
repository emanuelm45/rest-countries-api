import { AnimatedRoutes, CountryCard, Spinner } from '../../components'
import { getAllCountries } from '../../hooks/countries'
import { ICountry } from '../../interfaces'
import { StyledMain } from './style'
import { Link } from 'react-router-dom'
import { animationAllCountries } from '../../components/AnimatedRoutes'

export default function Home() {
  const { data, isLoading, isError, error } = getAllCountries()

  if (isLoading) return <Spinner />

  return (
    <StyledMain>
      <AnimatedRoutes animation={animationAllCountries}>
        {data.slice(0, 15).map((country: ICountry, index: number) => {
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
      </AnimatedRoutes>
    </StyledMain>
  )
}

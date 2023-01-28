import { CountryCard, Spinner, Error, Filters } from '../../components'
import { ICountry } from '../../interfaces'
import Styled from './style'
import { Link } from 'react-router-dom'
import { animationAllCountries } from '../../animations'
import { useState } from 'react'
import { useDataCountries } from '../../contexts'
import { usePersistedState } from '../../hooks'
import { ScrollToLastCountry } from '../../utils/Scroll'

export default function Home() {
  const [region, setRegion] = useState('')
  const [search, setSearch] = useState('')
  const [position, setPosition] = usePersistedState<number>('pos', 0)

  const { data, isLoading } = useDataCountries()

  if (isLoading) return <Spinner />

  const lowerCaseSearch = search.toLocaleLowerCase()

  let filteredCountries = data
    .filter((country: ICountry) => {
      if (region === 'All')
        return country.name.common
          .toLocaleLowerCase()
          .startsWith(lowerCaseSearch)
      return (
        country.name.common.toLocaleLowerCase().startsWith(lowerCaseSearch) &&
        country.region.startsWith(region)
      )
    })
    .sort((a, b) => a.name.common.localeCompare(b.name.common))

  return (
    <>
      <ScrollToLastCountry position={position} />
      <Styled.MotionMain
        variants={animationAllCountries}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Filters setSearch={setSearch} setRegion={setRegion} />
        <Styled.DivContainer>
          {filteredCountries?.length ? (
            filteredCountries.map((country: ICountry, index: number) => {
              return (
                <Link
                  to={country.cca2}
                  key={index}
                  onClick={ev => setPosition(ev.currentTarget.offsetTop)}
                >
                  <CountryCard
                    image={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                </Link>
              )
            })
          ) : (
            <Error />
          )}
        </Styled.DivContainer>
      </Styled.MotionMain>
    </>
  )
}

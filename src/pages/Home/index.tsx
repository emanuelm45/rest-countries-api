import { CountryCard, Spinner, Error, Filters } from '../../components'
import { ICountry } from '../../interfaces'
import Styled from './style'
import { animationHome } from '../../animations'
import { useState } from 'react'
import { useDataCountries } from '../../contexts'
import { usePersistedState } from '../../hooks'
import { ScrollToLastCountry } from '../../utils/Scroll'
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

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
        variants={animationHome}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Filters setSearch={setSearch} setRegion={setRegion} />
        <Styled.MotionDivContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          {filteredCountries?.length ? (
            filteredCountries.map((country: ICountry, index: number) => {
              return (
                <Styled.CountryCardContainer key={index}>
                  <Link
                    to={country.cca2}
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
                </Styled.CountryCardContainer>
              )
            })
          ) : (
            <Error />
          )}
        </Styled.MotionDivContainer>
      </Styled.MotionMain>
    </>
  )
}

import { CountryCard } from '../../components'
import { useGetAllCountries } from '../../hooks/countries'
import { ICountry } from '../../interfaces'
import { StyledMain } from './style'
import CircularProgress from '@mui/material/CircularProgress'

export function Home() {
  const { data, isFetching } = useGetAllCountries()

  if (isFetching)
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <CircularProgress size={60} disableShrink />
      </div>
    )

  return (
    <StyledMain>
      <div>
        {data.map((country: ICountry, index: number) => {
          return (
            <CountryCard
              image={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              key={index}
            />
          )
        })}
      </div>
    </StyledMain>
  )
}

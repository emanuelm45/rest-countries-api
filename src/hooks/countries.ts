import { useQuery } from 'react-query'
import { useDataCountries } from '../contexts'
import { ICountry } from '../interfaces'

function getAllCountries() {
  return useQuery('getAllCountries', async () => {
    return await fetch(`https://restcountries.com/v3.1/all`).then(data =>
      data.json()
    )
  })
}

function getCountriesByCode(paramsCode: string) {
  const { data: countries, isLoading: countriesIsLoading } = useDataCountries()

  const codeLowerCase = paramsCode?.toLocaleLowerCase()
  const country = countries?.filter(
    (country: ICountry) => country?.cca2.toLocaleLowerCase() === codeLowerCase
  )[0]

  const codes = country?.borders?.join(',')

  const { data: borderCoutries, isLoading: borderCountriesIsLoading } =
    useQuery(
      'getCountriesByCode',
      async () => {
        return await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codes}`
        ).then(data => data.json())
      },
      {
        enabled: !!country && !!codes
      }
    )

  return {
    country: country,
    borderCountries: borderCoutries,
    isLoading: countriesIsLoading || borderCountriesIsLoading
  }
}

export { getAllCountries, getCountriesByCode }

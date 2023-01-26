import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { UseDataCountries } from '../contexts'
import { ICountry } from '../interfaces'

export function getAllCountries() {
  return useQuery('getAllCountries', async () => {
    return await fetch(`https://restcountries.com/v3.1/all`).then(data =>
      data.json()
    )
  })
}

export function getCountriesByCode(paramsCode: string) {
  const { data: countries, isLoading: countriesIsLoading } = UseDataCountries()

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
        enabled: !!country
      }
    )

  return {
    country: country,
    borderCountries: borderCoutries,
    isLoading: countriesIsLoading || borderCountriesIsLoading
  }
}

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export function getAllCountries() {
  return useQuery('getAllCountries', async () => {
    return await fetch(`https://restcountries.com/v3.1/all`).then(data =>
      data.json()
    )
  })
}

export function getCountryByCode(code: string) {
  const {
    data: countryData,
    isLoading: countryisLoading,
    isFetched: countryIsFetched,
    error: countryError,
    isError: countryIsError
  } = useQuery(['getCountryByCode', code], async () => {
    return await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(
      data => data.json().then(data => data[0])
    )
  })

  const codes = countryData?.borders?.join(',')

  const {
    data: bordersData,
    isLoading: bordersisLoading,
    error: bordersError,
    isError: bordersIsError
  } = useQuery(
    ['getCountriesByCode', code],
    async () => {
      return await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
        .then(data => data.json())
        .catch(error => error)
    },
    {
      enabled: !!countryData && !!codes && countryIsFetched
    }
  )
  return {
    countryData: countryData,
    bordersData: bordersData,
    isLoading: countryisLoading || bordersisLoading,
    error: countryError || bordersError,
    isError: countryIsError || bordersIsError
  }
}

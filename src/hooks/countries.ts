import { useQuery } from 'react-query'

export async function getAllCountries(): Promise<Object[] | any> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.statusText)
    }
    return data.slice(0, 15)
  } catch (error) {
    return error
  }
}

export function useGetAllCountries() {
  return useQuery('getAllCountries', () => getAllCountries().then(data => data))
}

export async function getCountryByCode(code: string): Promise<Object[] | any> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.statusText)
    }
    return data[0]
  } catch (error) {
    return error
  }
}

export function useGetCountryByCode(code: string) {
  return useQuery('getCountryByCode', () =>
    getCountryByCode(code).then(data => data)
  )
}

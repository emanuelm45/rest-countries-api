import { useQuery } from 'react-query'

export async function getAllCountries(): Promise<Object[] | any> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.statusText)
    }
    return data
  } catch (error) {
    return error
  }
}

export function useGetAllCountries() {
  return useQuery('getAllCountries', () => getAllCountries().then(data => data))
}

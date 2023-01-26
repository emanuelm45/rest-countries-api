import { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getAllCountries } from '../../hooks/countries'
import { ICountry } from '../../interfaces'

interface IDataCountries {
  data: ICountry[]
  isLoading: boolean
}

export const DataCountries = createContext<IDataCountries>({} as IDataCountries)

export function DataCountriesProvider({ children }: { children: JSX.Element }) {
  const { data, isLoading } = getAllCountries()

  return (
    <DataCountries.Provider value={{ data, isLoading }}>
      {children}
    </DataCountries.Provider>
  )
}

export function UseDataCountries() {
  return useContext(DataCountries)
}

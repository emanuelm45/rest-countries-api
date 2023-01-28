import { createContext, ReactNode, useContext } from 'react'
import { getAllCountries } from '../hooks'
import { ICountry } from '../interfaces'

interface IDataCountries {
  data: ICountry[]
  isLoading: boolean
}

const DataCountries = createContext<IDataCountries>({} as IDataCountries)

function DataCountriesProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = getAllCountries()

  return (
    <DataCountries.Provider value={{ data, isLoading }}>
      {children}
    </DataCountries.Provider>
  )
}

function useDataCountries() {
  return useContext(DataCountries)
}

export { DataCountries, DataCountriesProvider, useDataCountries }

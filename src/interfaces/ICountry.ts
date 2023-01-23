export interface ICountry {
  borders: string[]
  capital: string[]
  cca2: string
  currencies: {
    [currency: string]: {
      name: string
      symbol: string
    }
  }
  flags: {
    png: string
    svg: string
  }
  languages: {
    [language: string]: string
  }
  name: {
    common: string
    nativeName: {
      [lang: string]: {
        official: string
        common: string
      }
    }
  }
  population: number
  region: string
  subregion: string
  tld: string[]
}

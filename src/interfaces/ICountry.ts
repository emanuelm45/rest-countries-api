export interface ICountry {
  capital: string[]
  flags: {
    png: string
    svg: string
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
}

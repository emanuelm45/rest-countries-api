import { ICountry } from '../interfaces'

export function checkCurrencyLength(value: ICountry) {
  if (value.currencies === undefined) return
  const currencies: string[] = []
  for (let currency in value.currencies) {
    currencies.push(value.currencies[currency].name)
  }
  return (
    <p>
      <span>{currencies.length > 1 ? 'Currencies:' : 'Currency'}</span>{' '}
      {currencies.join(', ')}
    </p>
  )
}

import { ICountry } from '../interfaces'

export function checkLanguageLength(value: ICountry) {
  if (value.languages === undefined) return
  if (Object.keys(value.languages).length > 1) {
    const languages: string[] = []
    for (let language in value.languages) {
      languages.push(value.languages[language])
    }
    return (
      <p>
        <span>Languages:</span> {languages.join(', ')}
      </p>
    )
  }
  return (
    <p>
      <span>Language:</span> {Object.values(value.languages)[0]}
    </p>
  )
}

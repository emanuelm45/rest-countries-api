import { Link, useParams } from 'react-router-dom'
import { useGetCountryByCode } from '../../hooks/countries'
import {
  StyledDivBorderCountries,
  StyledDivContainer,
  StyledDivContent,
  StyledList,
  StyledMain
} from './style'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkCurrencyLength, checkLanguageLength } from '../../utils/'
import { ICountry } from '../../interfaces'
import { Spinner } from '../../components'

export default function CountryDetails() {
  const { code } = useParams()
  const { data, isFetching } = useGetCountryByCode(String(code))

  if (isFetching) return <Spinner />

  const country: ICountry = data

  return (
    <StyledMain>
      <StyledDivContainer>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </Link>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          title={`${country.name.common} flag`}
        />
        <div>
          <h2>{country.name.common}</h2>
          <StyledDivContent>
            <div>
              <p>
                <span>Native Name:</span>{' '}
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].common
                }
              </p>

              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              {country.subregion !== undefined ? (
                <p>
                  <span>Sub Region:</span> {country.subregion}
                </p>
              ) : (
                ''
              )}
              {country.capital && (
                <p>
                  <span>
                    {country.capital.length > 1 ? 'Capitals:' : 'Capital:'}
                  </span>{' '}
                  {country.capital?.join(', ')}
                </p>
              )}
            </div>
            <div>
              {country.tld && (
                <p>
                  <span>
                    {country.tld.length > 1
                      ? 'Top Level Domains:'
                      : 'Top Level Domain:'}
                  </span>{' '}
                  {country.tld?.join(', ')}
                </p>
              )}
              {checkCurrencyLength(country)}
              {checkLanguageLength(country)}
            </div>
          </StyledDivContent>

          <StyledDivBorderCountries>
            <p>
              <span>Border Countries:</span>
            </p>
            {country.borders && (
              <StyledList>
                {country.borders.map((border, index) => {
                  return <li key={index}>{border}</li>
                })}
              </StyledList>
            )}
          </StyledDivBorderCountries>
        </div>
      </StyledDivContainer>
    </StyledMain>
  )
}

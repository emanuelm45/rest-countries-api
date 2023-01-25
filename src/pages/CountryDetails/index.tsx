import { Link, useParams } from 'react-router-dom'
import { getCountryByCode } from '../../hooks/countries'
import {
  StyledButtonBack,
  StyledDivBorderCountries,
  StyledDivContainer,
  StyledDivContent,
  StyledDivContentContainer,
  StyledList,
  StyledMain
} from './style'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkCurrencyLength, checkLanguageLength } from '../../utils/'
import { ICountry } from '../../interfaces'
import { AnimatedRoutes, Spinner } from '../../components'
import { animationCountryDetails } from '../../components/AnimatedRoutes'

export default function CountryDetails() {
  const { code } = useParams()
  const { countryData, bordersData, isLoading, isError, error } =
    getCountryByCode(String(code))

  if (isLoading) return <Spinner />
  if (isError) return <p>There was an error</p>

  const country: ICountry = countryData
  const borderCountries: ICountry[] = bordersData

  return (
    <StyledMain>
      <AnimatedRoutes animation={animationCountryDetails}>
        <StyledDivContainer>
          <StyledButtonBack to="/">
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
          </StyledButtonBack>
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            title={`${country.name.common} flag`}
          />
          <StyledDivContentContainer>
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

            {borderCountries && (
              <StyledDivBorderCountries>
                <p>
                  <span>Border Countries:</span>
                </p>
                <StyledList>
                  {borderCountries.map((border, index) => {
                    return (
                      <Link to={`/${border.cca2}`} key={index}>
                        <li>{border.name.common}</li>
                      </Link>
                    )
                  })}
                </StyledList>
              </StyledDivBorderCountries>
            )}
          </StyledDivContentContainer>
        </StyledDivContainer>
      </AnimatedRoutes>
    </StyledMain>
  )
}

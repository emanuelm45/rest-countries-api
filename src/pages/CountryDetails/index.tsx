import { Link, useParams } from 'react-router-dom'
import { getCountriesByCode } from '../../hooks/countries'
import * as Styled from './style'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  checkCurrencyLength,
  checkLanguageLength,
  formatNumber
} from '../../utils/'
import { Spinner } from '../../components'
import { animationCountryDetails } from '../../animations'
import { motion } from 'framer-motion'
import { ICountry } from '../../interfaces'

export default function CountryDetails() {
  const { code } = useParams()
  const { country, borderCountries, isLoading } = getCountriesByCode(
    String(code)
  )

  if (isLoading) return <Spinner />

  return (
    <Styled.Main>
      <Styled.MotionDiv
        variants={animationCountryDetails}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Styled.DivContainer>
          <Styled.ButtonBack to="/">
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
          </Styled.ButtonBack>
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            title={`${country.name.common} flag`}
          />
          <Styled.DivContentContainer>
            <h2>{country.name.common}</h2>
            <Styled.DivContent>
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
                  <span>Population:</span> {formatNumber(country.population)}
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
            </Styled.DivContent>

            <Styled.DivBorderCountries>
              {borderCountries?.length ? (
                <>
                  <p>
                    <span>Border Countries:</span>
                  </p>
                  <Styled.List>
                    {borderCountries.map((border: ICountry, index: number) => {
                      return (
                        <Link to={`/${border.cca2}`} key={index}>
                          <motion.li
                            initial={{
                              opacity: 0,
                              translateY: -50
                            }}
                            animate={{
                              opacity: 1,
                              translateY: 0
                            }}
                            transition={{
                              duration: 0.2,
                              delay: !index ? 0.6 : index * 0.3
                            }}
                          >
                            {border.name.common}
                          </motion.li>
                        </Link>
                      )
                    })}
                  </Styled.List>
                </>
              ) : (
                <p>
                  <span>No border countries</span>
                </p>
              )}
            </Styled.DivBorderCountries>
          </Styled.DivContentContainer>
        </Styled.DivContainer>
      </Styled.MotionDiv>
    </Styled.Main>
  )
}

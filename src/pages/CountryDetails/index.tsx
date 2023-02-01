import { Link, useParams } from 'react-router-dom'
import { getCountriesByCode } from '../../hooks'
import Styled from './style'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  checkCurrencyLength,
  checkLanguageLength,
  formatNumber
} from '../../utils'
import { Spinner } from '../../components'
import {
  animationImgCountryDetails,
  animationContentCountryDetails,
  animationBordersCountryDetails
} from '../../animations'
import { motion } from 'framer-motion'
import { ICountry } from '../../interfaces'

export default function CountryDetails() {
  const { code } = useParams()
  const { country, borderCountries, isLoading } = getCountriesByCode(
    String(code)
  )

  if (isLoading) return <Spinner />

  return (
    <Styled.MotionMain
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.9 } }}
    >
      <Styled.DivContainer>
        <Styled.ButtonBack to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </Styled.ButtonBack>
        <motion.img
          variants={animationImgCountryDetails}
          initial="initial"
          animate="animate"
          exit="exit"
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          title={`${country.name.common} flag`}
        />
        <Styled.MotionDivContentContainer
          variants={animationContentCountryDetails}
          initial="initial"
          animate="animate"
          exit="exit"
        >
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

          <Styled.MotionDivBorderCountries
            variants={animationBordersCountryDetails}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {borderCountries?.length ? (
              <>
                <p>
                  <span>Border Countries:</span>
                </p>
                <Styled.List>
                  {borderCountries.map((border: ICountry, index: number) => {
                    return (
                      <Link to={`/${border.cca2}`} key={index}>
                        <li>{border.name.common}</li>
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
          </Styled.MotionDivBorderCountries>
        </Styled.MotionDivContentContainer>
      </Styled.DivContainer>
    </Styled.MotionMain>
  )
}

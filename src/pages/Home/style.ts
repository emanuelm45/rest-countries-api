import { motion } from 'framer-motion'
import styled from 'styled-components'

const MotionDivContainer = styled(motion.div)`
  min-height: 40vh;
`

const MotionMain = styled(motion.main)`
  margin-top: 18vh;
  padding-bottom: 10rem;

  ${MotionDivContainer} {
    width: 80vw;
    margin: 4rem auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 5rem;
  }
`

const CountryCardContainer = styled(motion.article)``

export default { MotionDivContainer, MotionMain, CountryCardContainer }

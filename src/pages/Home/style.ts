import { motion } from 'framer-motion'
import styled from 'styled-components'

const Motion = styled(motion.div)`
  /* position: absolute;
  left: 50%;
  transform: translate(-50%); */
`

const DivContainer = styled.div`
  min-height: 40vh;
`

const MotionMain = styled(motion.main)`
  margin-top: 18vh;
  padding-bottom: 5rem;

  ${DivContainer} {
    width: 80vw;
    margin: 4rem auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 5rem;
  }
`

export default { DivContainer, MotionMain }

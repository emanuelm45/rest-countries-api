import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MotionDiv = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`

export const DivContainer = styled.div`
  min-height: 40vh;
`

export const Main = styled.main`
  margin-top: 18vh;

  ${DivContainer} {
    width: 80vw;
    margin: 8vh auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 5rem;
  }
`

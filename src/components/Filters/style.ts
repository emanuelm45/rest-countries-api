import styled from 'styled-components'
import { devices } from '../../assets/devices'

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;

  @media (${devices.tablet}) {
    flex-direction: column;
    gap: 4rem;
    width: 90vw;
  }
`

const DivInputContainer = styled.div`
  box-shadow: 0px 0px 5px 1px var(--bs-200);
  position: relative;
  border-radius: 4px;
  width: min(40rem, 40vw);
  height: 6rem;

  @media (${devices.tablet}) {
    width: 100%;
  }

  svg {
    position: absolute;
    left: 3rem;
    top: 2.2rem;
    pointer-events: none;
  }
`

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 1.4rem 1.4rem 1.4rem 7.5rem;
  outline: none;
  font-size: var(--fz-400);

  &::placeholder {
    font-weight: var(--fw-semi-bold);
    font-size: var(--fz-400);
  }
`

export default { DivContainer, DivInputContainer, Input }

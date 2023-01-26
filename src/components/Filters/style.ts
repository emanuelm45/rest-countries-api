import styled from 'styled-components'
import { devices } from '../../assets/devices'

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`

export const DivInputContainer = styled.div`
  box-shadow: 0px 0px 5px 1px var(--bs-200);
  width: 40rem;
  position: relative;
  border-radius: 4px;

  @media (${devices.tablet}) {
    width: 100%;
  }

  svg {
    position: absolute;
    left: 3rem;
    top: 1.7rem;
    pointer-events: none;
  }
`

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 1.4rem 1.4rem 1.4rem 7.5rem;
  outline: none;
  font-size: var(--fz-400);

  &::placeholder {
    font-weight: var(--fw-semi-bold);
    font-size: var(--fz-400);
  }
`

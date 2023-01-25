import styled from 'styled-components'
import { devices } from '../../assets/devices'

export const StyledMain = styled.main`
  width: 100vw;
  flex: 1;
  margin-top: 20vh;
`
export const StyledDivContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'button button'
    'img content';
  column-gap: 3rem;
  row-gap: 3rem;
  place-content: space-between;

  @media (${devices.tablet}) {
    grid-template-areas: none;
    display: flex;
    flex-direction: column;
  }

  a {
    grid-area: button;
  }

  img {
    grid-area: img;
    /* border: 1px solid black; */
    width: min(500px, 100%);
  }

  & > div {
    grid-area: content;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;

    h2 {
      text-align: left;
      font-size: min(var(--fz-600), 6.5vw);
    }

    p {
      span {
        font-weight: var(--fw-semi-bold);
      }
    }
  }
`

export const StyledDivContent = styled.div`
  display: flex;
  gap: 3rem;

  @media (${devices.tablet}) {
    flex-direction: column;
  }
`

export const StyledDivBorderCountries = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`

export const StyledList = styled.ul`
  li {
    padding: 1rem;
    border: 1px solid black;
  }
`

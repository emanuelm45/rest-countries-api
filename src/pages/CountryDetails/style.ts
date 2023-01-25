import styled from 'styled-components'
import { devices } from '../../assets/devices'
import { Link } from 'react-router-dom'

export const StyledMain = styled.main`
  width: 100vw;
  flex: 1;
  margin-top: 18vh;
  /* DELETEME */
  padding-bottom: 5rem;
`

export const StyledDivContentContainer = styled.div``

export const StyledButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  place-self: self-start;
  padding: 0.8rem 3rem;
  box-shadow: 0px 0px 5px 2px var(--bs-200);
  border-radius: 4px;
`

export const StyledDivContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'button .'
    'img content';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;
  column-gap: min(8rem, 6vw);
  row-gap: 4rem;
  place-content: space-between;

  @media (${devices.laptop}) {
    width: 90vw;
    grid-template-areas: none;
    display: flex;
    flex-direction: column;
  }

  ${StyledButtonBack} {
    grid-area: button;
  }

  img {
    grid-area: img;
    max-height: 450px;
    place-self: center;
    box-shadow: 0px 0px 5px 2px var(--bs-200);
  }

  & > div {
    grid-area: content;
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
  gap: 5rem;
  width: 100%;

  @media (${devices.tabletS}) {
    flex-direction: column;
  }

  & > div {
    margin-top: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const StyledDivBorderCountries = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 100%;
  margin-top: 4rem;

  @media (${devices.tablet}) {
    align-items: flex-start;
    flex-direction: column;
  }

  p {
    white-space: nowrap;
  }
`

export const StyledList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (${devices.tablet}) {
    justify-content: center;
  }

  li {
    padding: 0.5rem 1.8rem;
    box-shadow: 0px 0px 5px var(--bs-200);
    border-radius: 4px;
  }
`

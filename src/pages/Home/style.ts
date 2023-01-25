import styled from 'styled-components'

export const StyledMain = styled.main`
  flex: 1;
  margin-top: 12vh;

  & > div {
    width: 80vw;
    margin: 8vh auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24.5rem, 1fr));
    gap: 2rem;
  }
`

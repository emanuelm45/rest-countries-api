import styled from 'styled-components'

export const StyledMain = styled.main`
  background-color: ${props => props.theme.colors.background};

  & > div {
    width: 80vw;
    margin: 24vh auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    gap: 2rem;
  }
`

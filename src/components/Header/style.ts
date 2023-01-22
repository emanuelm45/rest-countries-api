import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  width: 100vw;
  background-color: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};
  box-shadow: 0 5px 10px var(--bs-100);

  div {
    height: 12vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: max(var(--fz-400), 2.2vw);
  }
`

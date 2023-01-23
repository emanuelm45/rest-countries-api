import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bs-100: hsla(0, 0%, 0%, 0.2);

    --ff-primary: 'Nunito Sans', sans-serif;
    --fz-300: 0.875rem;
    --fz-400: 1rem;
    --fz-600: 2rem;

    --fw-semi-bold: 600;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: var(--ff-primary);
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    list-style: none;
    transition-property: background-color 250ms, color 250ms;
    -o-transition-property: background-color 250ms, color 250ms;
    -webkit-transition-property: background-color 250ms, color 250ms;
    -moz-transition-property: background-color 250ms, color 250ms;
  }

  body {
    background-color: ${props => props.theme.colors.background};
  }

  img  {
    display: block;
    max-width: 100%;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

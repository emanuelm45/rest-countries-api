import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bs-200: hsla(0, 0%, 0%, 0.2);
    --bs-500: hsla(0, 0%, 0%, 0.5);

    --ff-primary: 'Nunito Sans', sans-serif;
    --fz-300: 1.4;
    --fz-400: 1.6rem;
    --fz-600: 3.2rem;

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
  }

  html {
    font-size: 62.5%; 
    overflow-x: hidden;
  } 
  
  body {
    background-color: ${props => props.theme.colors.background};
    font-size: var(--fz-400);
  }

  img  {
    display: block;
    max-width: 100%;
    user-select: none;
  }

  .App {
    min-height: 82vh;
    position: relative;
  }
`

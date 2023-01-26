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
    transition: background-color 400ms, color 400ms;
    -o-transition: background-color 400ms, color 400ms;
    -webkit-transition: background-color 400ms, color 400ms;
    -moz-transition: background-color 400ms, color 400ms;
  }

  html {
    font-size: 62.5%; 
  } 
  
  body {
    background-color: ${props => props.theme.colors.background};
    font-size: var(--fz-400);
    overflow-x: hidden;
  }

  img  {
    display: block;
    max-width: 100%;
    user-select: none;
  }
`

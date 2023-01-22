import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-dark-mode-elements: hsl(209, 23%, 22%);
    --clr-dark-mode-background: hsl(207, 26%, 17%);
    --clr-light-mode-text: hsl(200, 15%, 8%);
    --clr-light-mode-input: hsl(0, 0%, 52%);
    --clr-light-mode-background: hsl(0, 0%, 98%);
    --clr-dark-mode-text-light-mode-elements: hsl(0, 0%, 100%);

    --bs-100: rgba(0,0,0,.2);

    --ff-primary: 'Nunito Sans', sans-serif;
    --fz-300: 0.875rem;
    --fz-400: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition-property: background-color, color;
    transition-duration: 250ms;
    font-family: var(--ff-primary);
  }

  img  {
    display: block;
    max-width: 100%;
  }

  .App {
    display: flex;
    flex-direction: column;
  }
`

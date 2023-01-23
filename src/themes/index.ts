import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  colors: {
    background: 'hsl(207, 26%, 17%)',
    elements: 'hsl(208, 23%, 22%)',
    text: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 100%)',
    hover: 'hsl(207, 26%, 17%)'
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(0, 0%, 98%)',
    elements: 'hsl(0, 0%, 100%)',
    text: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
    hover: 'hsl(0, 0%, 85%)'
  }
}

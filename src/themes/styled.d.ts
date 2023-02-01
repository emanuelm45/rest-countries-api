import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      elements: string
      text: string
      input: string
      hoverDark: string
      hoverLight: string
    }
  }
}

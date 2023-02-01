import { MouseEventHandler } from 'react'
import Styled from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header({
  handleToggleTheme,
  isDarkTheme
}: {
  handleToggleTheme: MouseEventHandler
  isDarkTheme: boolean
}) {
  return (
    <Styled.Header>
      <div>
        <h1>Where in the world?</h1>
        <Styled.ButtonToggleTheme onClick={handleToggleTheme}>
          <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          <button>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</button>
        </Styled.ButtonToggleTheme>
      </div>
    </Styled.Header>
  )
}

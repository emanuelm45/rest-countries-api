import { MouseEventHandler } from 'react'
import { StyledHeader, StyledButtonToggleTheme } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header({
  handleToggleTheme: handleClick,
  isDarkTheme
}: {
  handleToggleTheme: MouseEventHandler
  isDarkTheme: boolean
}) {
  return (
    <StyledHeader>
      <div>
        <h1>Where in the world?</h1>
        <StyledButtonToggleTheme onClick={handleClick}>
          <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          <button>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</button>
        </StyledButtonToggleTheme>
      </div>
    </StyledHeader>
  )
}

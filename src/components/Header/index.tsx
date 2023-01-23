import { MouseEventHandler } from 'react'
import { StyledHeader } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function Header({
  handleClick,
  isDarkTheme
}: {
  handleClick: MouseEventHandler
  isDarkTheme: boolean
}) {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <span onClick={handleClick}>
          <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          <button>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</button>
        </span>
      </div>
    </StyledHeader>
  )
}

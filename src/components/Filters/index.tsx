import { Dispatch } from 'react'
import Styled from './style'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import { useTheme } from 'styled-components'

const options = [
  {
    label: 'All',
    value: 0
  },
  {
    label: 'Africa',
    value: 1
  },
  {
    label: 'Americas',
    value: 2
  },
  {
    label: 'Asia',
    value: 3
  },
  {
    label: 'Europe',
    value: 4
  },
  {
    label: 'Oceania',
    value: 5
  }
]

export default function Filters({
  setSearch,
  setRegion
}: {
  setSearch: Dispatch<React.SetStateAction<string>>
  setRegion: Dispatch<React.SetStateAction<string>>
}) {
  const theme = useTheme()

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '4px',
      width: '22rem',
      height: '6rem',
      boxShadow: '0 0 5px 2px hsla(0, 0%, 0%, .2)'
    }),
    container: (styles: any) => ({ ...styles, height: '100%' }),
    option: (styles: any, { isSelected }: { isSelected: boolean }) => ({
      ...styles,
      backgroundColor: isSelected ? theme.colors.hoverDark : 'transparent',
      '&:hover': {
        backgroundColor: theme.colors.hoverLight
      },
      color: theme.colors.text
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: theme.colors.background
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.colors.text
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: theme.colors.text
    }),
    input: (styles: any) => ({
      ...styles,
      color: theme.colors.text
    })
  }

  function handleRegion(value: number | undefined) {
    if (!value) return
    setRegion(options[value].label)
  }

  return (
    <Styled.DivContainer>
      <Styled.DivInputContainer>
        <FontAwesomeIcon icon={faSearch} />
        <Styled.Input
          type="text"
          onChange={ev => setSearch(ev.currentTarget.value.trim())}
          placeholder="Search for a country..."
        />
      </Styled.DivInputContainer>

      <Select
        isSearchable={false}
        onChange={ev => handleRegion(ev?.value)}
        options={options}
        styles={selectStyles}
        placeholder="Filter by Region"
      />
    </Styled.DivContainer>
  )
}

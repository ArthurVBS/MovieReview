import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

type ThemeType = typeof theme

export default createGlobalStyle<{theme: ThemeType}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track,
  *::-webkit-scrollbar-corner {
    background: #E5E5E5;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color.primary};
    border-radius: 8px;
    border: 4px solid #E5E5E5;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #c0c0c0;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #a0a0a0;
  }

  html,
  body {
    background-color: ${props => props.theme.main.secondary};
  }

  a,
  a:hover {
    text-decoration: none;
    color: unset;
  }
`

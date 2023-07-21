import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'TK Component Library',
  brandUrl: 'https://portal.thyssenkrupppresta.com/tkp/default.asp',
  brandImage: 'public/assets/images/logos/tk64x64.png',
})

export const defaultTheme = {
  palette: {
    mode: 'light',
    text: {
      primary: 'rgb(17, 24, 39)',
      secondary: 'rgb(107, 114, 128)',
      disabled: 'rgb(149, 156, 169)',
    },
    common: {
      black: 'rgb(17, 24, 39)',
      white: 'rgb(255, 255, 255)',
    },
    primary: {
      light: '#bde9ff',
      main: '#008fd7',
      dark: '#003a57',
      text: '#00a0f0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#aab3bf',
      main: '#4b5564',
      dark: '#272c33',
      text: '#fff',
      contrastText: '#fff',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f9f9f9',
    },
    error: {
      light: '#ffcdd2',
      main: '#f44336',
      dark: '#b71c1c',
    },
  },
}

import { extendTheme } from '@mui/joy/styles'
import { bodyFont, headFont } from './fonts'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12'
        }
      }
    }
  },
  fontFamily: {
    body: bodyFont.style.fontFamily,
    display: headFont.style.fontFamily,
    fallback: 'sans-serif'
  },
  components: {
    JoyContainer: {
      defaultProps: {
        maxWidth: 'xl'
      }
    },
    JoyButton: {
      defaultProps: {
        sx: {
          borderRadius: 90
        }
      }
    },
    JoyIconButton: {
      defaultProps: {
        sx: {
          borderRadius: 90
        }
      }
    }
  }
})

export default theme

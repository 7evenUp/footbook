import { createText, createBox, createTheme } from '@shopify/restyle'

export const palette = {
  yellow: '#F2C72F',
  greenDark: '#22A966',
  greenLight: '#E0F6E3',
  lime: '#3FF22F',
  red: '#F2522F',
  cyan: '#2FC3F2',
  greyDark: '#6D7A74',
  greyLight: '#C6C8CA',
  purple: '#B42FF2',
  white: '#FFF',
  black: '#000',
  transparent: 'rgba(0,0,0,0)'
}

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    navBackground: palette.greenLight,
    collectionCardInfo: palette.greyLight,
    greyDark: palette.greyDark,
    black: palette.black,
    white: palette.white,
    greyLight: palette.greyLight,
    greenDark: palette.greenDark,
    greenLight: palette.greenLight,
    red: palette.red,
    cyan: palette.cyan,
    transparent: palette.transparent
  },
  spacing: {
    s: 8,
    xs: 12,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    collectionHeading: {
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      lineHeight: 27,
      color: 'black',
    },
    collectionCardName: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: 32,
      lineHeight: 48,
      textShadowColor: 'black',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 1
    },
    collectionCardInfo: {
      color: 'collectionCardInfo',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      lineHeight: 21
    },
    collectionItemAboutHeading: {
      color: 'white',
      fontFamily: 'Poppins-Regular',
      fontSize: 24,
      lineHeight: 36
    },
    collectionItemLevel: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: 24,
      lineHeight: 36,
      textShadowColor: 'black',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 1
    },
    collectionItemStart: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: 32,
      lineHeight: 48,
      textTransform: 'uppercase',
      textShadowColor: 'black',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 1
    },
    SkillBookTitle: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: 64,
      lineHeight: 96,
      textShadowColor: 'black',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5
    },
    StatsAccentText: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 24,
      lineHeight: 36,
      textAlign: 'center'
    },
    StatsHelpText: {
      color: 'greyDark',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center'
    },
    StatsHeading: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      lineHeight: 27
    },
    StatsActivityInfoText: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      lineHeight: 24
    },
    StatsNoneData: {
      color: 'greenDark',
      fontFamily: 'Poppins-Bold',
      fontSize: 64,
      lineHeight: 96,
      textShadowColor: 'black',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 5
    },
    StatsActivityDate: {
      color: 'greyLight',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      lineHeight: 21
    },
    Poppins400Size14ColorGreyDark: {
      color: 'greyDark',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      lineHeight: 21
    },
    Poppins400Size18ColorBlack: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      lineHeight: 27
    },
    Poppins400Size18ColorWhite: {
      color: 'black',
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      lineHeight: 27
    },
    Poppins400Size18ColorGreyDark: {
      color: 'greyDark',
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
      lineHeight: 27
    },
    Poppins400Size18ColorCyan: {
      color: 'cyan',
      fontFamily: 'Poppins-Regular',
      fontSize: 18
    },
    Poppins400Size24ColorWhite: {
      color: 'white',
      fontFamily: 'Poppins-Regular',
      fontSize: 24,
      lineHeight: 28.8
    },
    Poppins400Size24ColorGreyDark: {
      color: 'greyDark',
      fontFamily: 'Poppins-Regular',
      fontSize: 24,
      lineHeight: 28.8
    },
    Poppins700Size18ColorBlack: {
      color: 'black',
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      lineHeight: 27
    },
    Poppins700Size18ColorWhite: {
      color: 'white',
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      lineHeight: 27
    },
    Poppins700Size24ColorBlack: {
      color: 'black',
      fontFamily: 'Poppins-Bold',
      fontSize: 24,
      lineHeight: 36
    }
  }
})

export type Theme = typeof theme
export const Text = createText<Theme>()
export const Box = createBox<Theme>()
export default theme
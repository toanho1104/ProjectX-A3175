// export const colors = {
//   primaryDark: '#00004F',
//   primary: '#19227C',
//   primaryLight: '#524AAC',

//   secondaryDark: '#C8B900',
//   secondary: '#FFEB3B',
//   secondaryLight: '#FFFF72',

//   textDark: '#000000',
//   textLight: '#757575',
//   textOnPrimary: '#ffffff',
//   textOnSecondary: '#000000',

//   iconPrimary: '#60727d',

//   backgroundPrimary: '#ffffff',
//   backgroundSecondary: '#E5E5E5',

// }
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const rate = width / 375
export const lightColors = {
  primaryDark: '#00004F',
  primary: '#19227C',
  primaryLight: '#524AAC',

  secondaryDark: '#C8B900',
  secondary: '#FFEB3B',
  secondaryLight: '#FFFF72',

  textPrimary: '#000000',
  textSecondary: '#757575',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#000000',

  iconPrimary: '#60727d',

  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#E5E5E5',

}
export const darkColors = {
  primaryDark: '#00004F',
  primary: '#ffffff',
  primaryLight: '#524AAC',

  secondaryDark: '#C8B900',
  secondary: '#FFEB3B',
  secondaryLight: '#FFFF72',

  textDark: '#000000',
  textLight: '#757575',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#000000',

  iconPrimary: '#60727d',

  backgroundPrimary: '#000000',
  backgroundSecondary: '#E5E5E5',

}

export const fonts = {
  bold: {
    fontFamily: 'Roboto-Bold',
  },
  regular: {
    fontFamily: 'Roboto-Regular',
  },
  italic: {
    fontFamily: 'Roboto-Italic',
  },
  thinItalic: {
    fontFamily: 'Roboto-ThinItalic',
  },
  boldItalic: {
    fontFamily: 'Roboto-BoldItalic',
  },
}

export const textStyles = {
  headingLarge: {
    ...fonts.bold,
    fontSize: 30,
    // lineHeight: 1.2,
  },
  headingMedium: {
    ...fonts.bold,
    fontSize: 24,
    // lineHeight: 1.2,
  },
  headingSmall: {
    ...fonts.bold,
    fontSize: 18,
    // lineHeight: 1.2,
  },

  linkTextBold: {
    ...fonts.boldItalic,
    fontSize: 14,
    // lineHeight: 1.2,
  },
  linkTextNomarl: {
    ...fonts.italic,
    fontSize: 14,
    // lineHeight: 1.2,
  },

  buttonTextBold: {
    ...fonts.bold,
    fontSize: 15 * rate,
    // lineHeight: 1.2,
  },
  buttonTextNomarl: {
    ...fonts.regular,
    fontSize: 15 * rate,
    // lineHeight: 1.2,
  },

  contenTextBold: {
    ...fonts.bold,
    fontSize: 14,
  },
  contenTextRegular: {
    ...fonts.regular,
    fontSize: 14,
  },
  contenTextItalic: {
    ...fonts.italic,
    fontSize: 14,
  },
  textInput: {
    ...fonts.regular,
    fontSize: 16,
    // lineHeight: 1.2,
  },
  textBottomTab: {
    ...fonts.bold,
    fontSize: 14,
  },

}

// export const Shadows = {
//   buttonShadow: {
//     shadowColor: colors.primaryRed,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.24,
//     shadowRadius: 30,
//     elevation: 8,
//   },
//   mainButtonShadow: {
//     shadowColor: colors.primaryBlue,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.24,
//     shadowRadius: 30,
//     elevation: 8,
//   },
// }

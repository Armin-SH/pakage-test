import {TypographyType} from './typography.type'


export const typographyTheme: TypographyType = {
  fontFamily: ['IRANSansRegular', 'Helvetica', 'Calibri', 'Arial', 'sans-serif',].join(','),
  large: {
    lineHeight: 1.5,
    fontSize: "1.1875rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1.5625rem"
    },
  },
  medium: {
    lineHeight: 1.5,
    fontSize: "1rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1.375rem"
    },
  },
  small: {
    lineHeight: 1.5,
    fontSize: "0.875rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1.1875rem"
    },
  },
  tiny: {
    lineHeight: 1.5,
    fontSize: "0.75rem",
    "@media only screen and (min-width: 640px)": {
      fontSize: "1rem"
    },
  },
}

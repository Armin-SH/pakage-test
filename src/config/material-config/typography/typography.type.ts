interface FontType {
  fontSize: string
  lineHeight: number
  "@media only screen and (min-width: 640px)": any
}


export interface TypographyType {
  large: FontType
  medium: FontType
  small: FontType
  tiny: FontType
  fontFamily: string
}

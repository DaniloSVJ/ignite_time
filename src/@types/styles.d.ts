// import { ThemeConsumer, DefaultTheme } from 'styled-components'
import 'styles-component'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

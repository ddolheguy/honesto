import theme from '../src/theme/theme';
import 'styled-components';

type CustomDefaultTheme = typeof theme;

// This is so don't have to import theme props in all styled components
declare module 'styled-components' {
  export interface DefaultTheme extends CustomDefaultTheme {}
}

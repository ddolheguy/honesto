import { colours } from './colours';

const theme = {
  fonts: {
    regular: 'Untitled Sans'
  },
  colours
};

export default theme;

export interface ThemeProps {
  theme: typeof theme;
}

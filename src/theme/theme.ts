import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;

export const colours = {
  purple: '#AB61E5',
  black: '#031323',
  green: '#57bba1',
  grey: '#D9DCDE',
  lightGrey: '#F2F3F4',
  white: '#FFFFFF'
};

const theme = {
  fonts: {
    regular: 'Roboto-Regular'
  },
  colours
};

export default theme;

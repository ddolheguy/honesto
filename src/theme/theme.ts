import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-LightItalic.eot');
      src: url('/fonts/UntitledSans-LightItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-LightItalic.woff2') format('woff2'),
          url('/fonts/UntitledSans-LightItalic.woff') format('woff'),
          url('/fonts/UntitledSans-LightItalic.ttf') format('truetype'),
          url('/fonts/UntitledSans-LightItalic.svg#UntitledSans-LightItalic') format('svg');
      font-weight: 300;
      font-style: italic;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-Black.eot');
      src: url('/fonts/UntitledSans-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-Black.woff2') format('woff2'),
          url('/fonts/UntitledSans-Black.woff') format('woff'),
          url('/fonts/UntitledSans-Black.ttf') format('truetype'),
          url('/fonts/UntitledSans-Black.svg#UntitledSans-Black') format('svg');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-RegularItalic.eot');
      src: url('/fonts/UntitledSans-RegularItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-RegularItalic.woff2') format('woff2'),
          url('/fonts/UntitledSans-RegularItalic.woff') format('woff'),
          url('/fonts/UntitledSans-RegularItalic.ttf') format('truetype'),
          url('/fonts/UntitledSans-RegularItalic.svg#UntitledSans-RegularItalic') format('svg');
      font-weight: normal;
      font-style: italic;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-Bold.eot');
      src: url('/fonts/UntitledSans-Bold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-Bold.woff2') format('woff2'),
          url('/fonts/UntitledSans-Bold.woff') format('woff'),
          url('/fonts/UntitledSans-Bold.ttf') format('truetype'),
          url('/fonts/UntitledSans-Bold.svg#UntitledSans-Bold') format('svg');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-MediumItalic.eot');
      src: url('/fonts/UntitledSans-MediumItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-MediumItalic.woff2') format('woff2'),
          url('/fonts/UntitledSans-MediumItalic.woff') format('woff'),
          url('/fonts/UntitledSans-MediumItalic.ttf') format('truetype'),
          url('/fonts/UntitledSans-MediumItalic.svg#UntitledSans-MediumItalic') format('svg');
      font-weight: 500;
      font-style: italic;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-BlackItalic.eot');
      src: url('/fonts/UntitledSans-BlackItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-BlackItalic.woff2') format('woff2'),
          url('/fonts/UntitledSans-BlackItalic.woff') format('woff'),
          url('/fonts/UntitledSans-BlackItalic.ttf') format('truetype'),
          url('/fonts/UntitledSans-BlackItalic.svg#UntitledSans-BlackItalic') format('svg');
      font-weight: 900;
      font-style: italic;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-Medium.eot');
      src: url('/fonts/UntitledSans-Medium.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-Medium.woff2') format('woff2'),
          url('/fonts/UntitledSans-Medium.woff') format('woff'),
          url('/fonts/UntitledSans-Medium.ttf') format('truetype'),
          url('/fonts/UntitledSans-Medium.svg#UntitledSans-Medium') format('svg');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-BoldItalic.eot');
      src: url('/fonts/UntitledSans-BoldItalic.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-BoldItalic.woff2') format('woff2'),
          url('/fonts/UntitledSans-BoldItalic.woff') format('woff'),
          url('/fonts/UntitledSans-BoldItalic.ttf') format('truetype'),
          url('/fonts/UntitledSans-BoldItalic.svg#UntitledSans-BoldItalic') format('svg');
      font-weight: bold;
      font-style: italic;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-Light.eot');
      src: url('/fonts/UntitledSans-Light.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-Light.woff2') format('woff2'),
          url('/fonts/UntitledSans-Light.woff') format('woff'),
          url('/fonts/UntitledSans-Light.ttf') format('truetype'),
          url('/fonts/UntitledSans-Light.svg#UntitledSans-Light') format('svg');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Untitled Sans';
      src: url('/fonts/UntitledSans-Regular.eot');
      src: url('/fonts/UntitledSans-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/UntitledSans-Regular.woff2') format('woff2'),
          url('/fonts/UntitledSans-Regular.woff') format('woff'),
          url('/fonts/UntitledSans-Regular.ttf') format('truetype'),
          url('/fonts/UntitledSans-Regular.svg#UntitledSans-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  html, body {
    height: 100%;
    font-family: 'Untitled Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;

export const colours = {
  disabled: '#ACB1B6',
  purple: '#AB61E5',
  darkPurple: '#7F0FD7',
  black: '#031323',
  green: '#57bba1',
  grey: '#D9DCDE',
  lightGrey: '#F2F3F4',
  darkGrey: '#59636E',
  white: '#FFFFFF'
};

const theme = {
  fonts: {
    regular: 'Untitled Sans'
  },
  colours
};

export default theme;

import { extendTheme } from '@chakra-ui/react';

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    a: 'green',
    b: 'yellow',
    c: 'red'
  }
};

const theme = extendTheme({ colors });

export default theme;

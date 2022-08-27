import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#FEFBF6', '#222831')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        borderLeft: '6px solid #30475E',
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
        paddingLeft: 2,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#ec5555', '#ec5555')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;

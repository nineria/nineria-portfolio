import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#FEFBF6', '#3D3C42')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        borderLeft: '6px solid #4299E1',
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
        paddingLeft: 2,
      },
      'section-title-dark': {
        borderLeft: '6px solid #F56565',
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
        paddingLeft: 2,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#805AD5', '#FAF089')(props),
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

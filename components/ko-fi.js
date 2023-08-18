import { Box, Button, Image, Text, useColorModeValue } from '@chakra-ui/react';

const KoFi = () => {
  const SchemeColorTheme = useColorModeValue('red', 'teal');
  const colorTheme = useColorModeValue('red.400', 'teal.400');
  return (
    <Box align='center' textColor='#fff'>
      <Button
        colorScheme={SchemeColorTheme}
        color='white'
        bgColor={colorTheme}
        onClick={() => window.open('https://ko-fi.com/nineria')}
      >
        <Image
          width='36px'
          src='/images/kofi_p_logo_nolabel.webp'
          alt='Buy Me a Coffee at ko-fi.com'
        />
        <Text>Support me on Ko-fi</Text>
      </Button>
    </Box>
  );
};

export default KoFi;

import { Box, Divider, useColorModeValue } from '@chakra-ui/react';

const TextDivider = ({ text, ...props }) => {
  const bgTheme = useColorModeValue('#F7ECDE', '#1e1e25');
  const colorTheme = useColorModeValue('black', 'white');

  return (
    <Box position='relative' py='10'>
      <Divider borderColor={colorTheme} />
      <Box
        {...props}
        pos='absolute'
        right={0}
        top='27px'
        mb={4}
        fontWeight='bold'
        bg={bgTheme}
        color={colorTheme}
        px={4}
      >
        {text}
      </Box>
    </Box>
  );
};

export default TextDivider;

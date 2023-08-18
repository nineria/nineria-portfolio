import { Box, Image, Link, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Stack>
      <Box align='center' opacity={0.4} fontSize='sm'>
        &copy;{new Date().getFullYear()} Tewarit Jantarasorn. All Rights
        Reserved.
      </Box>
      <Box align='center' opacity={0.4} fontSize='xs'>
        Inspired by{' '}
        <Link href='https://www.craftz.dog/' target='_blank'>
          craftz.dog
        </Link>
      </Box>
    </Stack>
  );
};

export default Footer;

import { Box, Button, Image, Spacer, Text } from '@chakra-ui/react'

const KoFi = () => {
  return (
    <Box align='center' textColor='#fff'>
      <Button
        cursor='pointer'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#29abe0'
        _hover={{
          backgroundColor: '#2391bf',
        }}
        width='fit-content'
        px='15px'
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
  )
}

export default KoFi

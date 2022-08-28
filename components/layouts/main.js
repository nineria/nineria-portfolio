import { Box, Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '../footer';
import NavBar from '../navbar';
import VoxelDogLoader from '../voxel-dog-loader';

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Tewarit's homepage" />
        <meta name='author' content='Tewarit Jantarasorn' />
        <meta name='author' content='nineria' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link
          rel='shortcut icon'
          href='/apple-touch-icon.png'
          type='image/x-icon'
        />
        <meta name='twitter:title' content='Tewarit Jantarasorn' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nineria' />
        <meta name='twitter:creator' content='@nineria' />
        <meta name='twitter:image' content='/card.png' />
        <meta property='og:site_name' content='Tewarit Jantarasorn' />
        <meta name='og:title' content='Tewarit Jantarasorn' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/card.png' />
        <title>Tewarit Jantarasorn - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;

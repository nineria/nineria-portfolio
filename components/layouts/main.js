import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../footer";
import NavBar from "../navbar";
import ThreeDModelLoader from "../three-d-model-loader";

const LazyLoadThreeDModel = dynamic(() => import("../three-d-model"), {
  ssr: false,
  loading: () => <ThreeDModelLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Shin's Homepage" />
        <meta name='author' content='Tewarit Jantarasorn' />
        <meta name='author' content='Tewarit Jantarasorn' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link
          rel='shortcut icon'
          href='/apple-touch-icon.png'
          type='image/x-icon'
        />
        <meta name='twitter:title' content='Nineria' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nineria_nananai' />
        <meta name='twitter:creator' content='@nineria_nananai' />
        <meta name='twitter:image' content='/card.png' />
        <meta property='og:site_name' content='Nineria' />
        <meta name='og:title' content='Nineria' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/card.png' />
        <title>Shin&#39;s Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' p={0} pt={14} pos='relative'>
        <LazyLoadThreeDModel />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;

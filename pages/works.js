import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import thumbCafeApp from '../public/images/works/cafe_app.png';
import thumbFavAnimeApp from '../public/images/works/favorite_anime_app.png';
import thumbMusicPlayerApp from '../public/images/works/music_player_app.png';
import thumbMyAniCommu from '../public/images/works/myanicommu_thumb.png';
import thumbSearchAlgorithm from '../public/images/works/search-algorithm-09.png';
import thumbHrApp from '../public/images/works/hr-app.jpg';
import thumbRedditCloneJoin from '@public/images/works/reddit-clone-join.png';
import thumbWeatherApp from '@public/images/works/weather-app.png';
import headingOldWorks from '../public/text/old-works.png';
import headingWorks from '../public/text/works.png';
import OTAKUCODEXThumb from '@public/images/works/OTAKU-CODEX-home-page-thumb.png';

const Works = () => (
  <Layout title='Tewarit Jantarasorn - Works'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        <Image
          src={headingWorks}
          alt='works'
          loading='lazy'
          placeholder='blur'
        />
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id='otakucodex'
            title='OTAKU CODEX'
            thumbnail={OTAKUCODEXThumb}
          >
            Unlocking the Anime Realm: Exploring the Enchanting Universe of
            OTAKUCODEX
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id='my-anime-community'
            title='My Anime Community'
            thumbnail={thumbMyAniCommu}
          >
            Exchange knowledge about anime, manga light novels and more.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id='internship-exvention'
            title='HR (Human Resource Management System)'
            thumbnail={thumbHrApp}
          >
            Manage candidate information and approvals through the website.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id='reddit-clone'
            title='Reddit Clone'
            thumbnail={thumbRedditCloneJoin}
          >
            Build a Reddit clone from scratch using React, Firebase, Next.js,
            Chakra UI, and TypeScript
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id='weather-app'
            title='Weather App'
            thumbnail={thumbWeatherApp}
          >
            Type in a location and get the weather report!
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id='search-algorithm'
            title='Anime Search Algorithm'
            thumbnail={thumbSearchAlgorithm}
          >
            Developing a search algorithm using TfidfVectorizer and
            linear_kernel
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
      {/* 
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as='h3' fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id='margelo' thumbnail={thumbMargelo} title='Margelo'>
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id='modetokyo'
            thumbnail={thumbModeTokyo}
            title='mode.tokyo'
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id='styly' thumbnail={thumbStyly} title='Styly'>
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as='h3' fontSize={20} mb={4}>
          <Image
            src={headingOldWorks}
            alt='works'
            loading='lazy'
            placeholder='blur'
          />
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id='404'
            thumbnail={thumbFavAnimeApp}
            title='Anime List'
          >
            Add favorite anime application
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id='404'
            thumbnail={thumbCafeApp}
            title='Cafe & Dessert'
          >
            Cafe and Dessert shop application
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id='404'
            thumbnail={thumbMusicPlayerApp}
            title='MusicWee'
          >
            Music Player for IOS/Android application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';

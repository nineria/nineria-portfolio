import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/layouts/article";
import headingPopularPosts from "../public/text/popular-posts.png";

// image thumbnails
import thumbAvid from "../public/images/posts/Avid-86-EIGHTY-SIX-Gura-AI-Cover.png";
import thumbWasurejiNoKotonoha from "../public/images/posts/Grimms-Notes-Wasureji-No-Kotonoha-Gura-AI-Cover.png";
import thumbLayers from "../public/images/posts/Layers.png";
import thumbIdol from "../public/images/posts/idol.png";

import thumbBirthdaySong from "../public/images/posts/birthday-song.png";
import thumbCryingForRain from "../public/images/posts/crying-for-rain.png";
import thumbLisaRealize from "../public/images/posts/lisa-realize.png";
import thumbMyDearest from "../public/images/posts/my-dearest.png";

import thumbJustAJoke from "../public/images/posts/just-a-joke.png";
import thumbSaySo from "../public/images/posts/say-so.png";
import thumbStayWithMe from "../public/images/posts/stay-with-me-rem-ai-cover.png";
import thumbYellow from "../public/images/posts/yellow.png";

import thumbEdSheeranPerfect from "../public/images/posts/ed-sheeran-perfect-viper-ai-cover.png";
import thumbJustTheTwoOfUs from "../public/images/posts/just-the-two-of-us-rem-ai-cover-aggressive-version.png";
import thumbYakuzaOstBakaMitai from "../public/images/posts/yakuza-ost-baka-mitai-rem-ai-cover.png";

import { GridItem } from "@components/grid-item";
import Section from "@components/section";
import TextDivider from "@components/text-divider";

const Posts = () => (
  <Layout title='Shin&#39;s Posts'>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        <Image
          src={headingPopularPosts}
          alt='works'
          loading='lazy'
          placeholder='blur'
        />
      </Heading>

      {/* <Text>Nothing right now ;)</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button
            colorScheme={useColorModeValue("purple", "red")}
            color="white"
            bgColor={useColorModeValue("purple.400", "red.400")}
          >
            Return to home
          </Button>
        </NextLink>
      </Box> */}

      <Section delay={0.1}>
        <TextDivider text='August 2023' />

        <SimpleGrid columns={[1, 3, 3]} gap={6}>
          <GridItem
            title='Yakuza OST - Baka Mitai (Rem AI Cover)'
            thumbnail={thumbYakuzaOstBakaMitai}
            href='https://www.youtube.com/watch?v=W2MWNEuO7Pc'
          />
          <GridItem
            title='Ed Sheeran - Perfect (Viper AI Cover)'
            thumbnail={thumbEdSheeranPerfect}
            href='https://www.youtube.com/watch?v=DQssoObT7KY'
          />
          <GridItem
            title='Just The Two Of Us - Rem AI Cover Aggressive Version'
            thumbnail={thumbJustTheTwoOfUs}
            href='https://www.youtube.com/watch?v=peRT0xzURlY'
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <TextDivider text='July 2023' />
        <SimpleGrid columns={[1, 3, 3]} gap={6}>
          <GridItem
            title='Just a Joke - VALORANT Viper AI Cover'
            thumbnail={thumbJustAJoke}
            href='https://www.youtube.com/watch?v=s_GvTJB2m2k'
          />
          <GridItem
            title='Say So (Japanese Version) - Rem AI Cover'
            thumbnail={thumbSaySo}
            href='https://www.youtube.com/watch?v=gUv1hkg0A3Q'
          />
          <GridItem
            title='神山 羊 - YELLOW - Kenjiro Tsuda AI Cover'
            thumbnail={thumbYellow}
            href='https://www.youtube.com/watch?v=QwAE12Aj8KE'
          />
          <GridItem
            title='「真夜中のドア」Stay With Me - Rem AI Cover'
            thumbnail={thumbStayWithMe}
            href='https://www.youtube.com/watch?v=XkGqn0Lwgag'
          />
          <GridItem
            title='「カワキヲアメク」Crying for Rain - Raiden Shogun AI Cover'
            thumbnail={thumbCryingForRain}
            href='https://www.youtube.com/watch?v=NJyVwPJR694'
          />
          <GridItem
            title='REALiZE」- Mori Calliope AI Cover'
            thumbnail={thumbLisaRealize}
            href='https://www.youtube.com/watch?v=1-loaaYdq8A'
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <TextDivider text='June 2023' />

        <SimpleGrid columns={[1, 3, 3]} gap={6}>
          <GridItem
            title='My Dearest - Moona Hoshinova AI Cover'
            thumbnail={thumbMyDearest}
            href='https://www.youtube.com/watch?v=gxKpMevVtKA'
          />
          <GridItem
            title='Birthday Song - Mori Calliope AI Cover'
            thumbnail={thumbBirthdaySong}
            href='https://www.youtube.com/watch?v=-ueWLNxH6pw'
          />
          <GridItem
            title='Re:CREATORS【Layers】- Mori Calliope AI Cover'
            thumbnail={thumbLayers}
            href='https://youtube.com/shorts/lcMwCQ13gMQ'
          />
          <GridItem
            title='「アイドル」Idol - Uruha Rushia x Mori Calliope (AI Cover)'
            thumbnail={thumbIdol}
            href='https://www.youtube.com/watch?v=8hOp0zQvAOc'
          />
          <GridItem
            title='【Grimms Notes】Wasureji No Kotonoha - Gura AI Cover'
            thumbnail={thumbWasurejiNoKotonoha}
            href='https://www.youtube.com/watch?v=_61m3ngX54E'
          />

          <GridItem
            title='『Avid』86 EIGHTY SIX  - Gura AI Cover'
            thumbnail={thumbAvid}
            href='https://www.youtube.com/watch?v=RsZq3fzwk-Y'
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "../components/chakra";

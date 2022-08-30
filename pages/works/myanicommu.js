import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';

import Layout from '../../components/layouts/article';
import P from '../../components/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';
import thumbMyAniCommu from '../../public/images/works/myanicommu_thumb.png';

const Work = () => (
  <Layout title='myanicommu'>
    <Container>
      <Title>
        My Anime Community <Badge>{new Date().getFullYear()}</Badge>
      </Title>
      <Image src={thumbMyAniCommu} alt='my-anime-community' />

      <Heading mt={2} size='md'>
        Description
      </Heading>
      <P>
        My Anime Community website purpose is to bring together people who like
        anime. They can come in and talk and exchange knowledge about anime,
        manga, light novels and more.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href='https://myanimecommunity.vercel.app/posts'
            target='_blank'
          >
            https://myanimecommunity.vercel.app/ <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Firebase, Next.js, Mantine, Tabler Icons</span>
        </ListItem>
      </List>

      <WorkImage
        src='/images/works/myanicommu-00.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-01.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-02.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-03.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-04.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-05.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-06.png'
        alt='my-anime-community'
      />
      <WorkImage
        src='/images/works/myanicommu-07.png'
        alt='my-anime-community'
      />

      {/* <WorkImage src='/images/works/inkdrop_01.png' alt='Inkdrop' />
      <WorkImage src='/images/works/inkdrop_02.png' alt='Inkdrop' />
      <AspectRatio maxW='640px' ratio={1.7} my={4}>
        <iframe
          src='https://www.youtube.com/embed/-qBavwqc_mY'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';

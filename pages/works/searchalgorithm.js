import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Badge,
  Container,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layouts/article';
import P from '../../components/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';
// import thumbMyAniCommu from '../../public/images/works/myanicommu_thumb.png';

const Work = () => (
  <Layout title='MyAniCommu'>
    <Container>
      <Title>
        Anime Search Algorithm <Badge>2020</Badge>
      </Title>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://github.com/nineria/AnimeListApi' target='_blank'>
            https://github.com/nineria/AnimeListApi
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python3, Ipynb</span>
        </ListItem>
      </List>

      {/* <WorkImage
        src='/images/works/myanicommu-00.png'
        alt='my-anime-community'
      /> */}
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';

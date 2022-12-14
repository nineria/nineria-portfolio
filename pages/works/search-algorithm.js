import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { Meta, Title } from '../../components/work';

const Work = () => (
  <Layout title='MyAniCommu'>
    <Container>
      <Title createdDate='18 AUG, 2022'>
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

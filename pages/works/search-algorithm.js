import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import thumbSearchAlgorithm from "@public/images/works/search-algorithm-09.png";
import { Meta, Title, WorkImage } from "../../components/work";
import Image from "next/image";
import P from "@components/paragraph";

const Work = () => (
  <Layout title="Search Algorithm">
    <Container>
      <Title createdDate="18 AUG, 2022">
        Anime Search Algorithm <Badge>2020</Badge>
      </Title>

      <Image src={thumbSearchAlgorithm} alt="search-algorithm" />

      <P>
        Algorithm for recommend a list of anime titles that closely resemble the
        subject matter that users are interested in.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://github.com/nineria/AnimeListApi/blob/c7aaa28af47b36343e8104f81d9a4e7c3858e3a9/AnimeRecomendation.ipynb"
            target="_blank"
          >
            https://github.com/nineria/AnimeListApi
            <ExternalLinkIcon mx="2px" />
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

      <WorkImage
        src="/images/works/search-algorithm-01.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-02.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-03.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-04.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-05.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-06.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-07.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-08.png"
        alt="search-algorithm"
      />
      <WorkImage
        src="/images/works/search-algorithm-09.png"
        alt="search-algorithm"
      />

      {/* <WorkImage
        src='/images/works/myanicommu-00.png'
        alt='my-anime-community'
      /> */}
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";

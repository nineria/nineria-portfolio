import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsDot } from "react-icons/bs";

export const Title = ({ children, createdDate }) => (
  <Box>
    <HStack spacing="0.5">
      <Text
        fontSize={12}
        fontWeight={700}
        opacity={0.6}
        textTransform="uppercase"
      >
        {createdDate || new Date().toDateString()}
      </Text>
      <span>
        {" "}
        <BsDot />{" "}
      </span>

      <NextLink href="/works" passHref>
        <Link fontSize={12} textTransform="uppercase" fontWeight={700}>
          Works
        </Link>
      </NextLink>
    </HStack>

    <Heading display="inline-block" as="h3" fontSize={24} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="base" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

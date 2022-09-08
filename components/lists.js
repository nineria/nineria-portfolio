import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';

export const HeadingStyle = styled.p`
  text-align: justify;
`;

export const Member = styled.li`
  text-align: justify;
  text-indent: 1em;
`;

export const Group = ({ title, children }) => (
  <Box mb={2}>
    <HeadingStyle>{title}</HeadingStyle>
    {children}
  </Box>
);

// const Lists = ({ href = '/', children }) => {
//   return (
//     <StyledList>
//       <NextLink href={href} passHref>
//         <Link target='_blank' color='#fff'>
//           {children}
//         </Link>
//       </NextLink>
//     </StyledList>
//   );
// };

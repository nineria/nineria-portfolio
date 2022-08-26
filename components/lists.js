import styled from '@emotion/styled';
import NextLink from 'next/link';

const Lists = styled.li`
  text-align: justify;
  text-indent: 1em;
`;

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

export default Lists;

import { Heading } from '../heading/heading';
import { styled } from '../../../styled-system/jsx';

const NameCap = styled('span', { base: { fontSize: { base: '3.5rem', md: '5.25rem' } } });
const NameSmallCap = styled('span', { base: { fontSize: { base: '5xl', md: '7xl' } } });

export function NameLede() {
  return (
    <Heading as="h1" css={{ display: 'block' }}>
      <NameCap>C</NameCap>
      <NameSmallCap>hris</NameSmallCap> <NameCap>L</NameCap>
      <NameSmallCap>o</NameSmallCap>
      <NameCap>P</NameCap>
      <NameSmallCap>resto</NameSmallCap>
    </Heading>
  );
}

import React, { type FC } from 'react';

import { Center, Heading, HStack, Tag } from '@chakra-ui/react';
import useHero from '../../hooks/useHero';
import usePackage from '../../hooks/usePackage';

const HeroTitle: FC = () => {
  const { title, showVersionBadge } = useHero();
  const { version = 'unknown' } = usePackage();

  return (
    <Center>
      <HStack
        align={{ base: 'center', md: 'start' }}
        justifyContent={{ base: 'center', md: 'start' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Heading
          as="h1"
          mb={8}
          fontSize="7xl"
          bgGradient="linear(to-r, brand.200, brand.500)"
          color="transparent"
          backgroundClip="text"
          textShadow="0 var(--chakra-sizes-2-5) var(--chakra-sizes-5) var(--chakra-colors-brand-200)"
        >
          {title}
        </Heading>
        {showVersionBadge ? (
          <Tag colorScheme="brand" color="whiteAlpha.900">
            V{version}
          </Tag>
        ) : null}
      </HStack>
    </Center>
  );
};

export default HeroTitle;

import React, { type FC } from 'react';

import useThemeConfig from '../../hooks/useThemeConfig';

import { Heading, Stack } from '@chakra-ui/react';
import Social from '../../components/Social';

const Footer: FC = () => {
  const themeConfig = useThemeConfig();

  return (
    <Stack
      justify={{ base: 'center', md: 'space-between' }}
      align="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Heading
        as="h4"
        size="sm"
        textAlign={{ base: 'center', md: 'left' }}
        dangerouslySetInnerHTML={{ __html: themeConfig.footer ?? '' }}
      ></Heading>
      <Social />
    </Stack>
  );
};

export default Footer;

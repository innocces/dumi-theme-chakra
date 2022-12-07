import React, { type FC } from 'react';

import useThemeConfig from '../../hooks/useThemeConfig';

import { Box, Stack } from '@chakra-ui/react';
import Social from '../../components/Social';

const Footer: FC = () => {
  const themeConfig = useThemeConfig();

  return (
    <Stack
      justify={{ base: 'center', md: 'space-between' }}
      align="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Box dangerouslySetInnerHTML={{ __html: themeConfig.footer ?? '' }}></Box>
      <Social />
    </Stack>
  );
};

export default Footer;

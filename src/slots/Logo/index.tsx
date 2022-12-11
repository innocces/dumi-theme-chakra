import React, { type FC } from 'react';

import { Link, useLocale } from 'dumi';
import useThemeConfig from '../../hooks/useThemeConfig';

import { Box, Image, Text } from '@chakra-ui/react';

import defaultLogo from '../../media/dumi-theme-chakra-logo.png';

const Logo: FC = () => {
  const { name, logo } = useThemeConfig();
  const locale = useLocale();

  return (
    <Link to={'base' in locale ? locale.base : '/'}>
      <Box
        display="flex"
        alignItems="center"
        fontSize="xl"
        fontWeight="semibold"
      >
        <Image
          h={{ base: 8, md: 10 }}
          src={logo ?? defaultLogo}
          alt={name}
          mr={{ base: 0, md: 2.5 }}
        />
        <Text whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          {name}
        </Text>
      </Box>
    </Link>
  );
};

export default Logo;

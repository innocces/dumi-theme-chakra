import React, { type FC, type PropsWithChildren } from 'react';

import { useSidebarData } from 'dumi';
import { Stack, useColorModeValue } from '@chakra-ui/react';

import './heti.scss';

const Content: FC<PropsWithChildren> = ({ children }) => {
  const sidebar = useSidebarData();
  const borderLeftColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');

  return (
    <Stack
      flexGrow={1}
      paddingInline={8}
      pt={sidebar ? { base: 2, md: 8 } : undefined}
      borderLeft={sidebar ? { base: undefined, md: '1px solid' } : undefined}
      borderLeftColor={{ base: 'transparent', md: borderLeftColor }}
      className="chakra-theme-content"
    >
      {children}
    </Stack>
  );
};

export default Content;

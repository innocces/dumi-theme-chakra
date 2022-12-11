import React, { type FC, type PropsWithChildren } from 'react';

import { Stack, useColorModeValue } from '@chakra-ui/react';

const Content: FC<PropsWithChildren> = ({ children }) => {
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.200');

  return (
    <Stack
      flexGrow={1}
      paddingInline={8}
      pt={{ base: 2, md: 8 }}
      borderLeft="1px solid"
      borderLeftColor={borderColor}
    >
      {children}
    </Stack>
  );
};

export default Content;

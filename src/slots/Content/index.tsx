import React, { type FC, type PropsWithChildren } from 'react';

import { Stack } from '@chakra-ui/react';

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <Stack flexGrow={1}>{children}</Stack>;
};

export default Content;

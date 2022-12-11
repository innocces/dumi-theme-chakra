import React, { type FC } from 'react';
import { Link, useLocale, FormattedMessage } from 'dumi';

import { Box, Heading, Stack, Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

const Page404: FC = () => {
  const locale = useLocale();

  return (
    <Box h="full">
      <Stack h="65%" align="center">
        <Text fontSize="7xl" color="brand.300" pt={28} pb={4}>
          <QuestionOutlineIcon />
        </Text>
        <Heading
          as="h1"
          pb={8}
          textAlign="center"
          fontSize={{ base: '5xl', md: '7xl' }}
          bgGradient="linear(to-r, brand.200, brand.500)"
          color="transparent"
          backgroundClip="text"
          textShadow="0 var(--chakra-sizes-2-5) var(--chakra-sizes-5) var(--chakra-colors-brand-200)"
        >
          <FormattedMessage id="404.title" />
        </Heading>
        <Button
          variant="outline"
          colorScheme="brand"
          rightIcon={<ArrowForwardIcon />}
          lineHeight={10}
        >
          <Link to={'base' in locale ? locale.base : '/'} replace>
            <FormattedMessage id="404.back" />
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default Page404;

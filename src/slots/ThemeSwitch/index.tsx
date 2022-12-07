import React, { type FC } from 'react';
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeSwitch: FC = () => {
  const { toggleColorMode } = useColorMode();
  const ThemeIcon = useColorModeValue(SunIcon, MoonIcon);
  return (
    <Button
      variant="ghost"
      fontSize="xl"
      padding={0}
      onClick={() => toggleColorMode()}
    >
      <ThemeIcon />
    </Button>
  );
};

export default ThemeSwitch;

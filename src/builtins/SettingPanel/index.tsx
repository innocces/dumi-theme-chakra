import React, {
  type FC,
  type PropsWithChildren,
  useRef,
  useMemo,
  useState,
  useCallback
} from 'react';

import { SettingsIcon, CheckIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
  ButtonGroup,
  Heading,
  Stack,
  Center,
  Wrap,
  WrapItem,
  Text,
  type Colors,
  HStack
} from '@chakra-ui/react';

import { FormattedMessage } from 'dumi';
import useTheme from '../../hooks/useTheme';
import { isObject } from '../../factory/tools';

// not colors scheme variable
const blackList = ['blackAlpha', 'whiteAlpha', 'brand'];

export type ColorItem = [string, Colors];

const ColorPanel: FC<{ color: ColorItem; hideChooseButton?: boolean }> = ({
  color: [colorKey, colorMap]
}) => (
  <Wrap>
    {Object.entries(colorMap).map(([alpha, color]) => {
      const text = `${colorKey}.${alpha}`;
      return (
        <WrapItem key={alpha} w="30%">
          <Center
            w="full"
            h={9}
            borderRadius="base"
            bg={text}
            shadow="sm"
            color="whiteAlpha.800"
            fontSize="sm"
            transitionProperty="all"
          >
            {color as string}
          </Center>
        </WrapItem>
      );
    })}
  </Wrap>
);

const SettingPanel: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeButtonRef = useRef(null);

  const { brand, changeBrand, config } = useTheme();
  const [currentChoose, setCurrentChoose] = useState<string>();

  const choicesThemeColors = useMemo<Array<ColorItem>>(() => {
    return Object.entries(config!.colors!).filter(
      ([colorKey, colorObject]) =>
        isObject(colorObject) && !blackList.includes(colorKey)
    ) as Array<ColorItem>;
  }, [config]);

  const brandColors = useMemo<ColorItem>(() => {
    return choicesThemeColors.filter(([brandKey, brandColorMap]) => {
      if (typeof brand === 'string') {
        return brandKey === brand;
      }
      if (isObject(brand)) {
        return Object.keys(brandColorMap).every(
          (key) => brand[key] === brandColorMap[key]
        );
      }
      return brandKey === 'purple';
    })[0];
  }, [choicesThemeColors, brand]);

  const storeAndChangeTheme = useCallback(() => {
    if (currentChoose) {
      const choicesTheme = choicesThemeColors.find(
        (v) => v[0] === currentChoose
      )![1];
      changeBrand!(choicesTheme);
    }
    onClose();
  }, [currentChoose, changeBrand, choicesThemeColors]);

  return (
    <>
      <Button
        ref={closeButtonRef}
        position="fixed"
        top="50%"
        translateY="-50%"
        colorScheme="brand"
        right={0}
        zIndex={200}
        fontSize="xl"
        onClick={onOpen}
        disabled={isOpen}
      >
        {children ?? <SettingsIcon />}
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={closeButtonRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading as="h4" fontSize="xl">
              <FormattedMessage id="theme.header" />
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Text fontSize="md">brand: {brandColors[0]}</Text>
              <ColorPanel color={brandColors} />
            </Stack>
            {choicesThemeColors.map(([colorKey], index) => (
              <Stack key={colorKey} mt={4}>
                <HStack justifyContent="space-between">
                  <Text fontSize="md">{colorKey}</Text>
                  <Button
                    colorScheme={colorKey}
                    onClick={() => setCurrentChoose(colorKey)}
                    leftIcon={
                      currentChoose === colorKey ? <CheckIcon /> : undefined
                    }
                  >
                    <FormattedMessage id="theme.choose" />
                  </Button>
                </HStack>
                <ColorPanel
                  color={choicesThemeColors[index]}
                  hideChooseButton
                />
              </Stack>
            ))}
          </DrawerBody>
          <DrawerFooter>
            <ButtonGroup spacing={3}>
              <Button variant="outline" onClick={onClose}>
                <FormattedMessage id="theme.cancel" />
              </Button>
              <Button colorScheme="brand" onClick={storeAndChangeTheme}>
                <FormattedMessage id="theme.confirm" />
              </Button>
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SettingPanel;

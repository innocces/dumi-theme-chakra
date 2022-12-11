import React, { type FC, useMemo } from 'react';

import useThemeConfig from '../../hooks/useThemeConfig';

import { Helmet, useRouteMeta, useOutlet, useSidebarData } from 'dumi';
import {
  Box,
  Container,
  HStack,
  Button,
  Hide,
  Show,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import DocProvider from '../../components/DocProvider';
import SettingPanel from '../../builtins/SettingPanel';
import AnnouncementBar from '../../slots/AnnouncementBar';
import Header from '../../slots/Header';
import Hero from '../../slots/Hero';
import Features from '../../slots/Features';
import Content from '../../slots/Content';
import SideBar from '../../slots/SideBar';
import Footer from '../../slots/Footer';

import { isUndefined } from '../../factory/tools';

import heroBackground from '../../media/hero-background.jpg';
import heroBackgroundDark from '../../media/hero-background-dark.jpg';

/**
 * @description cover default struct of dumi layout
 * @returns
 */
const DocLayout: FC = () => {
  const themeConfig = useThemeConfig();
  const routeMeta = useRouteMeta();
  const outlet = useOutlet();
  const sidebar = useSidebarData();

  const { colorMode } = useColorMode();
  const sidebarMenuBg = useColorModeValue('whiteAlpha.400', 'gray.800');
  const sidebarMenuBorderColor = useColorModeValue(
    'transparent',
    'whiteAlpha.400'
  );
  const backgroundImage = useColorModeValue(heroBackground, heroBackgroundDark);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const helmetTitle = useMemo(() => {
    const { name, helmetIcon } = themeConfig;
    const { frontmatter } = routeMeta;
    return [name, helmetIcon, frontmatter?.title ?? name].join(' ');
  }, [themeConfig, routeMeta]);

  const helmetDescription = useMemo(() => {
    const { frontmatter } = routeMeta;
    const { description } = themeConfig;
    return frontmatter?.description ?? description;
  }, [routeMeta, themeConfig]);

  const { logo, keywords, author, thumbBackground, settingPanelVisible } =
    themeConfig;

  const docBackgroundImage = useMemo<string>(() => {
    if (isUndefined(thumbBackground) || !thumbBackground) return '';
    return typeof thumbBackground === 'string'
      ? thumbBackground
      : backgroundImage;
  }, [thumbBackground, backgroundImage]);

  return (
    <>
      <Helmet>
        {logo && <link rel="shortcut icon" href={logo} />}
        <meta name="description" content={helmetDescription} />
        <meta property="og:description" content={helmetDescription} />
        <meta name="color-scheme" content={colorMode} />
        <meta name="keywords" content={keywords?.join?.(',')} />
        <meta property="og:keywords" content={keywords?.join?.(',')} />
        <meta name="generator" content="dumi & chakra-dumi" />
        {author && <meta name="author" content={author} />}
        <title>{helmetTitle}</title>
        <meta property="og:title" content={helmetTitle} />
      </Helmet>
      <Box
        minH="screenH"
        display="flex"
        flexDirection="column"
        backgroundImage={docBackgroundImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        {settingPanelVisible && (
          <Show above="md">
            <SettingPanel />
          </Show>
        )}
        <AnnouncementBar />
        <Header />
        {sidebar && (
          <Hide above="md">
            <Box position="sticky" top={18}>
              <HStack
                justify="space-between"
                bg={sidebarMenuBg}
                borderTop="1px"
                borderTopColor={sidebarMenuBorderColor}
                borderTopStyle="solid"
              >
                <Button variant="ghost" onClick={onOpen}>
                  <HamburgerIcon />
                </Button>
              </HStack>
            </Box>
          </Hide>
        )}
        <Hero />
        <Features />
        <Container
          maxW="container.xxl"
          paddingInline={6}
          flexGrow={1}
          display="flex"
        >
          <SideBar isOpen={isOpen} onClose={onClose} />
          <Content>
            <Box flexGrow={1}>{outlet}</Box>
            <Footer />
          </Content>
        </Container>
      </Box>
    </>
  );
};

const DocLayoutWithProvider: FC = () => {
  const { brand, config } = useThemeConfig() ?? {};

  return (
    <DocProvider brand={brand} config={config}>
      <DocLayout />
    </DocProvider>
  );
};

export default DocLayoutWithProvider;

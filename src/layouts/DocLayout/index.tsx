import React, { useEffect, useMemo, type FC } from 'react';

import useLoading from '../../hooks/useLoading';
import useThemeConfig from '../../hooks/useThemeConfig';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Hide,
  HStack,
  Show,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import animateScrollTo from 'animated-scroll-to';
import {
  Helmet,
  useLocation,
  useOutlet,
  useRouteMeta,
  useSidebarData
} from 'dumi';
import SettingPanel from 'dumi/theme/builtins/SettingPanel';
import AnnouncementBar from 'dumi/theme/slots/AnnouncementBar';
import Content from 'dumi/theme/slots/Content';
import Features from 'dumi/theme/slots/Features';
import Footer from 'dumi/theme/slots/Footer';
import Header from 'dumi/theme/slots/Header';
import Hero from 'dumi/theme/slots/Hero';
import NavBar from 'dumi/theme/slots/Navbar';
import SideBar from 'dumi/theme/slots/Sidebar';
import Toc from 'dumi/theme/slots/Toc';

import { isUndefined } from '../../factory/tools';

import heroBackgroundDark from '../../media/hero-background-dark.jpg';
import heroBackground from '../../media/hero-background.jpg';

/**
 * @description cover default struct of dumi layout
 */
const DocLayout: FC = () => {
  const themeConfig = useThemeConfig();
  const routeMeta = useRouteMeta();
  const outlet = useOutlet();
  const sidebar = useSidebarData();
  const { hash } = useLocation();
  const loading = useLoading();

  const { colorMode } = useColorMode();
  const sidebarMenuBg = useColorModeValue('whiteAlpha.800', 'gray.800');
  const sidebarMenuBorderColor = useColorModeValue(
    'transparent',
    'whiteAlpha.400'
  );
  const backgroundImage = useColorModeValue(heroBackground, heroBackgroundDark);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navDisclosure = useDisclosure();

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

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          // animated-scroll-to instead of native scroll
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300
          });
        }
      }, 1);
    }
  }, [loading, hash]);

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
        <Header>
          <NavBar
            isOpen={navDisclosure.isOpen}
            onClose={navDisclosure.onClose}
          />
        </Header>
        {sidebar && (
          <Hide above="md">
            <Box position="sticky" top={18} zIndex={10}>
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
                <Button variant="ghost" onClick={navDisclosure.onOpen}>
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
          className="chakra-theme-container"
        >
          <SideBar isOpen={isOpen} onClose={onClose} />
          <Content>
            <Box flexGrow={1}>{outlet}</Box>
            <Footer />
          </Content>
          {routeMeta?.frontmatter?.toc === 'content' && (
            <Show above="md">
              <Box
                pt={8}
                h="calc(100vh - var(--chakra-sizes-18))"
                position="sticky"
                top={18}
              >
                <Toc />
              </Box>
            </Show>
          )}
        </Container>
      </Box>
    </>
  );
};

export default DocLayout;

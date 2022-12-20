import React, { useMemo, type FC } from 'react';

import { useRouteMeta, useSidebarData, useLocation, NavLink } from 'dumi';
import {
  Show,
  Hide,
  Box,
  Text,
  Stack,
  Heading,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import Toc from '../Toc';

export type SidebarConfig = {
  isOpen: boolean;
  onClose: () => void;
};

export type SideBarDataGroup = ReturnType<typeof useSidebarData>[0];

export type SideBarData = Omit<SideBarDataGroup, 'children'> & {
  children: (SideBarDataGroup['children'][0] & { toc: boolean })[];
};

export const Nav = chakra(NavLink) as typeof NavLink;

const SideBarMenu: FC<{
  menu: SideBarData[];
}> = ({ menu }) => {
  const groupBorderColor = useColorModeValue('whiteAlpha.500', 'gray.700');
  const activeLinkColor = useColorModeValue('brand.500', 'brand.300');
  const { pathname } = useLocation();

  return (
    <Box
      w={{ base: 'full', md: '13rem' }}
      h={{ base: 'full', md: 'calc(100vh - var(--chakra-sizes-18))' }}
      position={{ base: 'static', md: 'sticky' }}
      top={{ base: 0, md: 18 }}
      overflow="auto"
    >
      {menu.map(({ title, children }, index) => (
        <Box
          key={index}
          pt={2.5}
          borderTop={index === menu.length - 1 ? 0 : '1px'}
          borderTopColor={groupBorderColor}
          borderTopStyle="solid"
        >
          <Heading
            h={8}
            lineHeight={8}
            as="h2"
            fontSize="md"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {title}
          </Heading>
          <Stack>
            {children.map(({ link, title: childTitle, toc }) => (
              <Box key={link}>
                <Nav
                  position="sticky"
                  top={0}
                  h={8}
                  paddingBlock={1}
                  display="block"
                  cursor="pointer"
                  w="full"
                  to={link}
                  title={childTitle}
                  opacity={0.9}
                  sx={{
                    '&.active': {
                      color: activeLinkColor
                    }
                  }}
                  end
                >
                  <Text
                    as="span"
                    lineHeight={5}
                    fontSize="md"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    overflow="hidden"
                  >
                    {childTitle}
                  </Text>
                </Nav>
                {toc && <Toc />}
                {link === pathname && !toc && (
                  <Hide above="md">
                    <Toc />
                  </Hide>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

const SideBar: FC<SidebarConfig> = ({ isOpen, onClose }) => {
  const sidebar = useSidebarData();
  const { pathname } = useLocation();
  const meta = useRouteMeta();

  const withTocSidebar = useMemo<SideBarData[]>(() => {
    return sidebar
      ? sidebar.map((v) => ({
          ...v,
          children: v.children.map((c) => ({
            ...c,
            toc: c.link === pathname && meta.frontmatter.toc === 'menu'
          }))
        }))
      : [];
  }, [meta, sidebar, pathname]);
  if (!sidebar) return null;

  return (
    <>
      <Show above="md">
        <SideBarMenu menu={withTocSidebar} />
      </Show>
      <Hide above="md">
        <Drawer placement="left" isOpen={isOpen} onClose={onClose} isFullHeight>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <SideBarMenu menu={withTocSidebar} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </>
  );
};

export default SideBar;

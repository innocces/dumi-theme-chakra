import { Link, useLocation, useNavData } from 'dumi';
import React, { type FC } from 'react';

import {
  Button,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Hide,
  HStack,
  Show,
  useColorModeValue
} from '@chakra-ui/react';

import { isOutLink } from '../../factory/tools';

export type NavBarConfig = {
  isOpen: boolean;
  onClose: () => void;
};

export const ChakraLink = chakra(Link) as typeof Link;

const Nav = () => {
  const { pathname } = useLocation();
  const nav = useNavData();
  const activeLinkColor = useColorModeValue('brand.500', 'brand.300');

  return (
    <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={0}>
      {nav.map(({ link, title }) => {
        // TODO: activePath may use root locale, active error
        const outLink = isOutLink(link);
        const actionButton = (
          <Button
            variant="ghost"
            _hover={{ color: activeLinkColor }}
            className={pathname.startsWith(link) ? 'active' : ''}
            sx={{ '&.active': { color: activeLinkColor } }}
          >
            {title}
          </Button>
        );

        if (outLink) {
          return (
            <a key={link} href={link} target="_blank" rel="noreferrer">
              {actionButton}
            </a>
          );
        }

        return (
          <Link key={link} to={link}>
            {actionButton}
          </Link>
        );
      })}
    </HStack>
  );
};

const NavBar: FC<NavBarConfig> = ({ isOpen, onClose }) => {
  return (
    <>
      <Show above="md">
        <Nav />
      </Show>
      <Hide above="md">
        <Drawer placement="top" isOpen={isOpen} onClose={onClose} isFullHeight>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Nav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </>
  );
};

export default NavBar;

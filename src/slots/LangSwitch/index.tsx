import React, { useMemo, useCallback, useRef, type FC } from 'react';

import { history, useIntl, useLocale, useLocation, useSiteData } from 'dumi';

import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Stack,
  Show,
  Hide,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

type ILocaleItem = ReturnType<typeof useSiteData>['locales'][0];

function getTargetLocalePath({
  pathname,
  current,
  target
}: {
  pathname: string;
  current: ILocaleItem;
  target: ILocaleItem;
}) {
  const clearPath =
    'base' in current
      ? pathname.replace(current.base.replace(/\/$/, ''), '')
      : pathname.replace(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${target.base}${clearPath}`.replace(/^\/\//, '/')
    : `${clearPath}${target.suffix}`;
}

const LangSwitch: FC = () => {
  const { locales } = useSiteData();
  const { locale } = useIntl();
  const { pathname } = useLocation();
  const current = useLocale();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalFocusRef = useRef<HTMLButtonElement>(null);

  const localName = useMemo(() => {
    return locales.find((v) => v.id === locale)?.name;
  }, [locales, locale]);

  const changeLocale = useCallback(
    (localeId: string) => {
      history.push(
        getTargetLocalePath({
          pathname,
          current,
          target: locales.find(({ id }) => id === localeId)!
        })
      );
    },
    [locales, pathname]
  );

  // do not render in single language
  if (locales.length <= 1) return null;

  return (
    <Box pl={2.5}>
      <Show above="md">
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            rightIcon={<ChevronDownIcon />}
            colorScheme="brand"
          >
            {localName}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup
              defaultValue={locale}
              type="radio"
              onChange={(ev) => changeLocale(ev as string)}
            >
              {locales.map(({ id, name }) => (
                <MenuItemOption value={id} key={id}>
                  {name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Show>
      <Hide above="md">
        <Button
          ref={finalFocusRef}
          variant="outline"
          colorScheme="brand"
          onClick={onOpen}
        >
          {localName}
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={finalFocusRef}
          placement="top"
        >
          <DrawerOverlay />
          <DrawerContent h="screenH" backdropFilter="saturate(50%) blur(8px)">
            <DrawerCloseButton />
            <DrawerBody>
              <Stack>
                {locales.map(({ id, name }) => (
                  <Button
                    variant="ghost"
                    colorScheme={id === locale ? 'brand' : undefined}
                    key={id}
                    onClick={() => {
                      changeLocale(id);
                      onClose();
                    }}
                  >
                    {name}
                  </Button>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </Box>
  );
};

export default LangSwitch;

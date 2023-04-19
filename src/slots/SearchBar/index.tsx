import React, { useCallback, useEffect, useMemo } from 'react';

import { Button, Kbd, Show, Hide, useDisclosure } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  useSearchAble,
  DocSearch,
  Cmdk,
  type SearchType
} from '../SearchResult';

import { useIntl, useSiteSearch } from 'dumi';
import useThemeConfig from '../../hooks/useThemeConfig';

import { isAppleDevice, isUndefined, isObject } from '../../factory/tools';

export type SearchResultCommonType = {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export type SearchResult = ReturnType<typeof useSiteSearch>['result'];

export type SearchFlatData = (
  | {
      type: 'title';
      value: Pick<SearchResult[0], 'title'>;
    }
  | {
      type: 'hint';
      activeIndex: number;
      value: SearchResult[0]['hints'][0];
    }
)[];

export type SearchFlatCommonData = Pick<SearchResult[0], 'title'> &
  SearchResult[0]['hints'][0];

const SearchBar = () => {
  const searchAble = useSearchAble();
  const intl = useIntl();
  const themeConfig = useThemeConfig();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const commandKey = isAppleDevice ? '⌘' : 'Ctrl';

  const openSearchComponent = useCallback(() => {
    onOpen();
  }, []);

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      if (!searchAble) return;
      if (
        ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === 'k') ||
        ev.key === '/'
      ) {
        ev.preventDefault();

        onOpen();
      }

      if (ev.key === 'Escape') {
        ev.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [searchAble]);

  const searchType = useMemo<SearchType>(() => {
    if (
      isUndefined(themeConfig.search) ||
      (typeof themeConfig.search === 'boolean' && themeConfig.search)
    )
      return 'cmdk';
    return (
      (isObject(themeConfig.search) ? themeConfig.search?.type : 'cmdk') ??
      'cmdk'
    );
  }, [themeConfig]);

  if (!searchAble) return null;

  return (
    <>
      <Button
        onClick={openSearchComponent}
        variant={{ base: 'ghost', md: 'outline' }}
        paddingInline={{ base: 0, md: 4 }}
        leftIcon={
          <Show above="md">
            <SearchIcon />
          </Show>
        }
        rightIcon={
          <Show above="md">
            <Kbd>{commandKey} + K</Kbd>
          </Show>
        }
        colorScheme="brand"
      >
        <Show above="md">
          {intl.formatMessage({ id: 'header.search.placeholder' })}
        </Show>
        <Hide above="md">
          <SearchIcon />
        </Hide>
      </Button>
      {searchType === 'cmdk' ? (
        <Cmdk isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      ) : (
        <DocSearch isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      )}
    </>
  );
};

export default SearchBar;

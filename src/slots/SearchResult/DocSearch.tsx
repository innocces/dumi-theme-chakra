import React, { type FC } from 'react';

import type { SearchResultCommonType } from '../SearchBar';
import { Helmet, useIntl } from 'dumi';
import { DocSearchModal } from '@docsearch/react';
import { Portal } from '@chakra-ui/react';

import useThemeConfig from '../../hooks/useThemeConfig';

import ALGOLIA from '../../constant/algolia';

import { isObject } from '../../factory/tools';

export type DocSearchConfig = {
  /**
   * @description Your Algolia application ID.
   */
  appId: string;
  /**
   * @description Your Algolia Search API key.
   */
  apiKey: string;
  /**
   * @description Your Algolia index name.
   */
  indexName: string;
};

import '@docsearch/css';

const DocSearch: FC<SearchResultCommonType> = ({ isOpen, onClose }) => {
  const { search } = useThemeConfig();
  const intl = useIntl();

  const algoliaConfig = (isObject(search)
    ? search
    : {}) as unknown as DocSearchConfig;

  const modalTranslations = ALGOLIA.reduce<
    Record<string, Record<string, string>>
  >((translation, keys) => {
    keys.forEach((v) => {
      const [field, key] = v.split('.');
      const fieldValue = translation[field] ?? {};
      translation[field] = {
        ...fieldValue,
        [key]: intl.formatMessage({ id: ['algolia', v].join('.') })
      };
    });
    return translation;
  }, {});

  return (
    <>
      {algoliaConfig?.appId && (
        <Helmet>
          <link
            rel="preconnect"
            href={`https://${algoliaConfig.appId}-dsn.algolia.net`}
            crossOrigin="anonymous"
          />
        </Helmet>
      )}
      {isOpen && (
        <Portal>
          <DocSearchModal
            {...algoliaConfig}
            placeholder={intl.formatMessage({
              id: 'header.search.placeholder'
            })}
            onClose={onClose}
            initialScrollY={window.scrollY}
            translations={{
              modal: modalTranslations
            }}
          />
        </Portal>
      )}
    </>
  );
};

export default DocSearch;

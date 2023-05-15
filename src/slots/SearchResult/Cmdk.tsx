import React, { type FC } from 'react';

import type {
  SearchResultCommonType,
  SearchResult,
  SearchFlatCommonData
} from '../SearchBar';

import { Command } from 'cmdk';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  InputGroup,
  Input,
  Divider,
  Hide,
  Spinner,
  chakra,
  Stack,
  Box,
  Heading,
  Highlight,
  type ComponentWithAs
} from '@chakra-ui/react';
import {
  NotAllowedIcon,
  LinkIcon,
  InfoIcon,
  ViewIcon,
  EditIcon
} from '@chakra-ui/icons';

import { useSiteSearch, useIntl, FormattedMessage, Link } from 'dumi';
import useFlatSearchData from '../../hooks/useFlatSearchData';

import './index.less';

const { Empty, Item, List, Loading } = Command;

const ChakraCommand = chakra(Command);
const ChakraItem = chakra(Item);
const ChakraList = chakra(List);
const ChakraEmpty = chakra(Empty);
const ChakraLoading = chakra(Loading);

const IconMap: Record<string, ComponentWithAs<'svg'>> = {
  title: InfoIcon,
  page: LinkIcon,
  content: EditIcon,
  demo: ViewIcon
};

type Highlights = SearchResult[0]['hints'][0]['highlightTexts'];

function generateHighlightQuery(highlight: Highlights): string[] {
  return highlight?.filter?.((v) => v.highlighted)?.map?.((v) => v.text) ?? [];
}

function generateHighlightText(highlight: Highlights): string {
  return highlight.map?.((v) => v.text)?.join?.('') ?? '';
}

const Cmdk: FC<SearchResultCommonType> = ({ isOpen, onClose }) => {
  const intl = useIntl();
  const { keywords, setKeywords, result, loading } = useSiteSearch();
  const [data] = useFlatSearchData(result);

  return (
    <Modal isOpen={isOpen!} onClose={onClose!}>
      <ModalOverlay />
      <ModalContent
        h={{ base: 'screenH', md: '472px' }}
        maxH={{ base: 'screenH', md: '472px' }}
        w={{ base: 'screenW', md: '640px' }}
        maxW={{ base: 'screenW', md: '640px' }}
        shadow="lg"
        paddingBlock={2}
        marginBlock={{ base: 0, md: 16 }}
        borderRadius={{ base: 0, md: 'md' }}
        className="chakra-search-result"
      >
        <Hide above="md">
          <ModalCloseButton zIndex={20} />
        </Hide>
        <ChakraCommand>
          <InputGroup>
            <Input
              autoFocus
              colorScheme="brand"
              border="none"
              borderRadius={0}
              _focusVisible={{
                border: 'none'
              }}
              value={keywords}
              onChange={(ev) => setKeywords(ev.target.value)}
              placeholder={intl.formatMessage({
                id: 'header.search.placeholder'
              })}
            />
          </InputGroup>
          <Divider marginBlock={3} />
          <ChakraList
            h={{
              base: 'calc(100vh - var(--chakra-space-20) - 1px)',
              md: '388px'
            }}
            overflow="auto"
          >
            {loading && !!keywords?.length && (
              <ChakraLoading h="full" w="full">
                <Stack h="full" pt={20} justify="center" align="center">
                  <Spinner color="brand.500" size="md" />
                  <Box mt={4}>
                    <FormattedMessage id="header.search.placeholder" />
                  </Box>
                </Stack>
              </ChakraLoading>
            )}
            <ChakraEmpty h="full" w="full">
              <Stack h="full" w="full" align="center" pt={20}>
                <NotAllowedIcon color="brand.500" fontSize="6xl" />
                <Box mt={4}>
                  <FormattedMessage id="search.not.found" />
                </Box>
              </Stack>
            </ChakraEmpty>
            {!loading &&
              data?.map?.(({ type, value }, idx) => {
                const {
                  title,
                  link,
                  highlightTitleTexts,
                  highlightTexts,
                  type: valueType
                } = value as SearchFlatCommonData;
                const Icon = IconMap[valueType];

                return (
                  <ChakraItem key={idx} paddingInline={3}>
                    {type === 'title' ? (
                      <Heading
                        as="h4"
                        size="sm"
                        lineHeight={8}
                        pt={2}
                        colorScheme="brand"
                      >
                        {title}
                      </Heading>
                    ) : (
                      <Link to={link} onClick={onClose}>
                        <Button
                          display="flex"
                          alignItems="center"
                          w="full"
                          textAlign="left"
                          paddingBlock={2}
                          mb={1}
                          h="max-content"
                          _hover={{
                            backgroundColor: 'brand.400',
                            color: 'whiteAlpha.900'
                          }}
                        >
                          <Icon />
                          <Box
                            flexGrow={1}
                            pl={2}
                            w="calc(100% - 1em - var(--chakra-space-2))"
                          >
                            <Heading as="h5" size="sm" fontWeight="semibold">
                              <Highlight
                                query={generateHighlightQuery(
                                  highlightTitleTexts
                                )}
                                styles={{
                                  fontWeight: 'bold',
                                  color: 'brand.500'
                                }}
                              >
                                {generateHighlightText(highlightTitleTexts)}
                              </Highlight>
                            </Heading>
                            <Heading
                              as="p"
                              size="xs"
                              w="full"
                              whiteSpace="nowrap"
                              textOverflow="ellipsis"
                              overflow="hidden"
                            >
                              <Highlight
                                query={generateHighlightQuery(highlightTexts)}
                                styles={{
                                  fontWeight: 'bold',
                                  color: 'brand.500'
                                }}
                              >
                                {generateHighlightText(highlightTexts)}
                              </Highlight>
                            </Heading>
                          </Box>
                        </Button>
                      </Link>
                    )}
                  </ChakraItem>
                );
              })}
          </ChakraList>
        </ChakraCommand>
      </ModalContent>
    </Modal>
  );
};

export default Cmdk;

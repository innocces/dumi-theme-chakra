import React, { useCallback, useMemo, type FC, type ReactNode } from 'react';
import { FormattedMessage, useAtomAssets, useRouteMeta, useLocale } from 'dumi';

import {
  Tr,
  Th,
  Tbody,
  Td,
  Thead,
  Skeleton,
  Center,
  Text,
  useColorModeValue,
  chakra
} from '@chakra-ui/react';
import Table from '../Table';

import { getLocalValue } from '../../factory/tools';

export type APIProps = {
  id?: string;
  default?: ReactNode;
};

const Code = chakra.code;

const API: FC<APIProps> = (props) => {
  const { frontmatter } = useRouteMeta();
  const { components } = useAtomAssets();
  const locale = useLocale();

  const id = props.id ?? frontmatter.atomId;
  const codeBgColor = useColorModeValue('gray.50', 'gray.800');
  const codeColor = useColorModeValue('brand.500', 'brand.300');

  if (!id) throw new Error('`id` properties if required for API component!');

  const definition = components?.[id];

  const loading = useMemo(() => {
    return !components;
  }, [components]);

  const properties = useMemo(() => {
    return loading ? { loading: {} } : definition?.propsConfig?.properties;
  }, [definition, loading]);

  const notFound = useMemo(() => {
    return components && !definition?.propsConfig?.properties;
  }, [definition, components]);

  const isReqiured = useCallback<
    (name: string, defaultValue: string) => ReactNode
  >(
    (name: string, defaultValue: string) => {
      return definition?.propsConfig?.required?.includes(name) ? (
        <FormattedMessage id="api.component.required" />
      ) : (
        defaultValue || '--'
      );
    },
    [definition]
  );

  return (
    <Table parseChildren={false}>
      <Thead>
        <Tr>
          <Th>
            <FormattedMessage id="api.component.name" />
          </Th>
          <Th>
            <FormattedMessage id="api.component.description" />
          </Th>
          <Th>
            <FormattedMessage id="api.component.type" />
          </Th>
          <Th>
            <FormattedMessage id="api.component.default" />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {notFound ? (
          <Tr>
            <Td colSpan={4}>
              <Center>
                <Text as="p">
                  <FormattedMessage id="api.component.not.found" />
                </Text>
              </Center>
            </Td>
          </Tr>
        ) : (
          (Object.entries(properties) as [string, Record<string, any>][]).map(
            ([name, prop]) => (
              <Tr key={name}>
                <Td>
                  <Skeleton isLoaded={!loading} fadeDuration={4}>
                    {name}
                  </Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={!loading} fadeDuration={4}>
                    {getLocalValue(locale, prop?.tags ?? {}, 'description') ||
                      '--'}
                  </Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={!loading} fadeDuration={4}>
                    <Code bgColor={codeBgColor} textColor={codeColor}>
                      {prop.type!}
                    </Code>
                  </Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={!loading} fadeDuration={4}>
                    <Code bgColor={codeBgColor} textColor={codeColor}>
                      {isReqiured(name, prop.default)}
                    </Code>
                  </Skeleton>
                </Td>
              </Tr>
            )
          )
        )}
      </Tbody>
    </Table>
  );
};

export default API;

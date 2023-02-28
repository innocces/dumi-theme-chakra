import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  type FC,
  type ReactNode,
  type PropsWithChildren
} from 'react';
import type { AtomComponentAsset } from 'dumi-assets-types';
import { FormattedMessage, useAtomAssets, useRouteMeta, useLocale } from 'dumi';

type PropertySchema = NonNullable<
  AtomComponentAsset['propsConfig']['properties']
>[string];

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

const Code: FC<PropsWithChildren> = ({ children }) => {
  const codeBgColor = useColorModeValue('gray.50', 'gray.800');
  const codeColor = useColorModeValue('brand.500', 'brand.300');
  return (
    <chakra.code bgColor={codeBgColor} textColor={codeColor}>
      {children}
    </chakra.code>
  );
};

const HANDLERS = {
  // entry method
  toString(prop: PropertySchema): string {
    if (typeof prop.type === 'string' && prop.type in this) {
      // value from TypeMap
      if ('enum' in prop) return this.enum(prop);

      return (this as any)[prop.type](prop);
    } else if (prop.type) {
      // non-parsed type, such as ReactNode
      return this.getValidClassName(prop) || prop.type;
    } else if ('const' in prop) {
      // const value
      return prop.const;
    } else if ('oneOf' in prop) {
      // oneOf value
      return this.oneOf(prop);
    }

    // unknown type
    return `unknown`;
  },

  // type handlers
  string(prop: PropertySchema) {
    return prop.type;
  },
  number(prop: PropertySchema) {
    return prop.type;
  },
  boolean(prop: PropertySchema) {
    return prop.type;
  },
  any(prop: PropertySchema) {
    return prop.type;
  },
  object(prop: Extract<PropertySchema, { type: 'object' }>) {
    let props: string[] = [];

    Object.entries(prop.properties || {}).forEach(([key, value]) => {
      // skip nested object type
      props.push(
        `${key}${prop.required?.includes(key) ? '' : '?'}: ${
          // @ts-ignore
          value.type === 'object' ? 'object' : this.toString(value)
        }`
      );
    });

    return props.length ? `{ ${props.join('; ')} }` : '{}';
  },
  array(prop: Extract<PropertySchema, { type: 'array' }>) {
    if (prop.items) {
      const className = this.getValidClassName(prop.items);

      return className ? `${className}[]` : `${this.toString(prop.items)}[]`;
    }

    return 'any[]';
  },
  // FIXME: extract real type
  element(prop: any) {
    return `<${prop.componentName} />`;
  },
  // FIXME: extract real type
  function({ signature }: any) {
    return `${signature.isAsync ? 'async ' : ''}(${signature.arguments
      .map((arg: any) => `${arg.key}: ${this.toString(arg)}`)
      .join(', ')}) => ${this.toString(signature.returnType)}`;
  },
  // FIXME: extract real type
  dom(prop: any) {
    return prop.className || 'DOM';
  },

  // special handlers
  enum(prop: PropertySchema) {
    return prop.enum!.map((v: any) => JSON.stringify(v)).join(' | ');
  },
  oneOf(prop: PropertySchema): string {
    return prop
      .oneOf!.map((v: any) => this.getValidClassName(v) || this.toString(v))
      .join(' | ');
  },

  // utils
  getValidClassName(prop: PropertySchema) {
    return 'className' in prop &&
      typeof prop.className === 'string' &&
      prop.className !== '__type'
      ? prop.className
      : null;
  }
};

const APIType: FC<PropertySchema> = (prop) => {
  const [type, setType] = useState(() => HANDLERS.toString(prop));

  useEffect(() => {
    setType(HANDLERS.toString(prop));
  }, [prop]);

  return <Code>{type}</Code>;
};

const API: FC<APIProps> = (props) => {
  const { frontmatter } = useRouteMeta();
  const { components } = useAtomAssets();
  const locale = useLocale();

  const id = props.id ?? frontmatter.atomId;

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
                    <APIType {...prop} />
                  </Skeleton>
                </Td>
                <Td>
                  <Skeleton isLoaded={!loading} fadeDuration={4}>
                    <Code>{isReqiured(name, prop.default)}</Code>
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

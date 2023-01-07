import React, {
  useMemo,
  Children,
  cloneElement,
  type FC,
  type PropsWithChildren,
  type ReactNode,
  type ReactElement
} from 'react';

import {
  Table as ChakraTable,
  TableContainer,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
} from '@chakra-ui/react';

export type ITableProps = {
  /**
   * @description whether
   */
  parseChildren?: boolean;
};

const nodeMap: Record<string, any> = {
  thead: Thead,
  tbody: Tbody,
  th: Th,
  td: Td,
  tr: Tr
};

function traversalType(node: ReactElement): ReactNode {
  const { type, props } = node;
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const children = props?.children ? traversalChildren(props.children) : [];
  const Element = nodeMap[type as string] as any;
  if (Element) {
    return cloneElement(<Element />, {
      ...props,
      children
    });
  }
  return node;
}

function traversalChildren(children: ReactNode): ReactNode {
  const count = Children.count(children);
  if (count) {
    return Children.map(children as ReactElement[], traversalType);
  }
  return traversalType(children as ReactElement);
}

const Table: FC<PropsWithChildren<ITableProps>> = ({
  children,
  parseChildren = true
}) => {
  const ComputedContent = useMemo<ReactNode>(() => {
    if (parseChildren) {
      // change thead tbody th td tr to chakra
      return traversalChildren(children);
    }
    return children;
  }, [parseChildren, children]);
  return (
    <TableContainer mt={6} mb={8}>
      <ChakraTable>{ComputedContent}</ChakraTable>
    </TableContainer>
  );
};

export default Table;

import React, {
  useMemo,
  type FC,
  type PropsWithChildren,
  type ReactNode
} from 'react';

import { Table as ChakraTable, TableContainer } from '@chakra-ui/react';

export type ITableProps = {
  /**
   * @description whether
   */
  parseChildren?: boolean;
};

const Table: FC<PropsWithChildren<ITableProps>> = ({
  children,
  parseChildren = true
}) => {
  const ComputedContent = useMemo<ReactNode>(() => {
    if (parseChildren) {
      return 123;
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

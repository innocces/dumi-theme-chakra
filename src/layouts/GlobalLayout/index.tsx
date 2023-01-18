import React, { type FC } from 'react';
import { useOutlet } from 'dumi';
import DocProvider from '../../components/DocProvider';

import useThemeConfig from '../../hooks/useThemeConfig';

const GlobalLayout: FC = () => {
  const outlet = useOutlet();
  const { brand, config } = useThemeConfig() ?? {};

  return (
    <DocProvider brand={brand} config={config}>
      {outlet}
    </DocProvider>
  );
};

export default GlobalLayout;

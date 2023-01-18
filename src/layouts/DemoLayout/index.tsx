import React, { type FC } from 'react';
import { useOutlet } from 'dumi';

const DemoLayout: FC = () => {
  const outlet = useOutlet();

  return <>{outlet}</>;
};

export default DemoLayout;

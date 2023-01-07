import React, { type FC, type PropsWithChildren } from 'react';
import { Button as CkButton } from '@chakra-ui/react';

export type ButtonProps = {
  /**
   * @description button variant type
   * @description.zh-CN 按钮展示类型
   */
  variant: 'ghost' | 'solid';
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, variant }) => {
  return (
    <CkButton colorScheme="brand" variant={variant}>
      {children}
    </CkButton>
  );
};

export default Button;

import React, { type FC, type PropsWithChildren, type ReactNode } from 'react';

import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  type AlertProps as ChakraAlertProps
} from '@chakra-ui/react';

export type AlertProps = {
  /**
   * @description alert title, style bold
   * @description.zh-CN Alert 标题. 加粗样式
   */
  title?: ReactNode;
  /**
   * @description alert description
   * @description.zh-CN Alert 内容
   */
  content?: ReactNode;
} & ChakraAlertProps;

const Alert: FC<PropsWithChildren<AlertProps>> = ({
  title,
  content,
  children,
  ...props
}) => {
  return (
    <ChakraAlert mb={4} {...props}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children ?? content}</AlertDescription>
    </ChakraAlert>
  );
};

export default Alert;

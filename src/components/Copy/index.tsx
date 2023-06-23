import React, {
  useRef,
  useCallback,
  forwardRef,
  type FC,
  type PropsWithRef,
  type PropsWithChildren
} from 'react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import CopyToClipboard, { type Props } from 'react-copy-to-clipboard';
import { Button, useBoolean, type ButtonProps } from '@chakra-ui/react';

export interface ICopyProps
  extends Omit<Props, 'onCopy' | 'children'>,
    ButtonProps {}

const Copy: FC<PropsWithRef<PropsWithChildren<ICopyProps>>> = forwardRef(
  ({ children, text, options, ...buttonProps }, ref) => {
    const timer = useRef<NodeJS.Timeout>();
    const [isCopied, { toggle }] = useBoolean();

    const handleCopy = useCallback(() => {
      clearTimeout(timer.current);
      toggle();
      timer.current = setTimeout(toggle, 2000);
    }, []);

    return (
      <CopyToClipboard onCopy={handleCopy} text={text} options={options}>
        <Button {...buttonProps} ref={ref}>
          {isCopied ? (
            <CheckIcon color="brand.300" />
          ) : (
            children ?? <CopyIcon />
          )}
        </Button>
      </CopyToClipboard>
    );
  }
);

export default Copy;

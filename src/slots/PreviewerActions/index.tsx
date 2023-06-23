import React, { type FC, useCallback, useMemo, useRef } from 'react';

import {
  openCodeSandbox,
  openStackBlitz,
  FormattedMessage,
  // @ts-ignore
  getSketchJSON,
  type IPreviewerProps
} from 'dumi';

// icons
import {
  AiOutlineCodeSandbox,
  AiOutlineThunderbolt,
  AiOutlineBranches
} from 'react-icons/ai';
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import { AiOutlineSketch } from 'react-icons/ai';

import {
  Icon,
  Button,
  HStack,
  Tooltip,
  Collapse,
  Popover,
  VStack,
  Box,
  useDisclosure,
  useColorModeValue,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody
} from '@chakra-ui/react';
import Tabs, {
  TabList,
  TabPanel,
  TabPanels,
  Tab
} from 'dumi/theme/builtins/Tabs';
import SourceCode, {
  type SourceCodeProps,
  type CodeTheme
} from 'dumi/theme/builtins/SourceCode';
import Copy from '../../components/Copy';

import useThemeConfig from '../../hooks/useThemeConfig';

export type Actions =
  | 'CSB'
  | 'CODEPEN'
  | 'STACKBLITZ'
  | 'EXTERNAL'
  | 'HTML2SKETCH';

export interface IPreviewerActionsProps extends IPreviewerProps {
  /**
   * disabled actions
   */
  disabledActions?: Actions[];
  forceShowCode?: boolean;
}

const PreviewerActions: FC<
  IPreviewerActionsProps & Partial<SourceCodeProps>
> = (props) => {
  const {
    disabledActions,
    asset,
    forceShowCode,
    showlinenumber,
    demoUrl,
    theme: formatTheme,
    demoContainer
  } = props;
  const { code } = useThemeConfig();
  const sketchInstanceRef = useRef();
  const checkActionEnable = useCallback<(action: Actions) => boolean>(
    (action) => {
      return !disabledActions?.includes(action);
    },
    [disabledActions]
  );

  const files = Object.entries(asset.dependencies).filter(
    ([, { type }]) => type === 'FILE'
  );
  const { isOpen, onToggle } = useDisclosure({ isOpen: forceShowCode });
  const actionsBorderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const isSingleFile = files.length === 1;
  const computedLang = useCallback<(key?: number) => any>(
    (key = 0) => files[key][0].match(/\.([^.]+)$/)?.[1] || 'text',
    [files]
  );

  const handleSketch = useCallback(
    (type: 'group' | 'symbol') => {
      return getSketchJSON(demoContainer, { type }).then(() =>
        (sketchInstanceRef.current as unknown as HTMLElement)?.click?.()
      );
    },
    [demoContainer]
  );

  const sourceCodeTheme = useMemo<CodeTheme | undefined>(() => {
    return formatTheme ?? code?.theme;
  }, [formatTheme, code]);

  return (
    <>
      <HStack
        justify="center"
        align="center"
        h={10}
        wrap="wrap"
        borderTop="1px dashed"
        borderTopColor={actionsBorderColor}
      >
        {checkActionEnable('CSB') && (
          <Tooltip
            hasArrow
            placement="top"
            label={<FormattedMessage id="previewer.actions.codesandbox" />}
          >
            <Button
              variant="ghost"
              onClick={() => openCodeSandbox(props)}
              paddingInline={2}
              minW={6}
            >
              <Icon as={AiOutlineCodeSandbox} />
            </Button>
          </Tooltip>
        )}
        {checkActionEnable('STACKBLITZ') && (
          <Tooltip
            hasArrow
            placement="top"
            label={<FormattedMessage id="previewer.actions.stackblitz" />}
          >
            <Button
              variant="ghost"
              onClick={() => openStackBlitz(props)}
              paddingInline={2}
              minW={6}
            >
              <Icon as={AiOutlineThunderbolt} />
            </Button>
          </Tooltip>
        )}
        {checkActionEnable('HTML2SKETCH') && getSketchJSON && (
          <Popover trigger="hover" placement="bottom">
            <Tooltip
              hasArrow
              placement="top"
              label={<FormattedMessage id="previewer.actions.html2canvas" />}
            >
              <Box>
                <PopoverTrigger>
                  <Copy
                    // @ts-ignore
                    ref={sketchInstanceRef}
                    variant="ghost"
                    paddingInline={2}
                    minW={6}
                  >
                    <Icon as={AiOutlineSketch} />
                  </Copy>
                </PopoverTrigger>
              </Box>
            </Tooltip>
            <PopoverContent w="max-content">
              <PopoverArrow />
              <PopoverBody w="max-content">
                <VStack w="max-content" alignItems="center">
                  <Button
                    variant="link"
                    colorScheme="brand"
                    onClick={() => handleSketch('group')}
                  >
                    <FormattedMessage id="previewer.actions.sketch.group" />
                  </Button>
                  <Button
                    variant="link"
                    colorScheme="brand"
                    onClick={() => handleSketch('symbol')}
                  >
                    <FormattedMessage id="previewer.actions.sketch.symbol" />
                  </Button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
        {checkActionEnable('EXTERNAL') && (
          <Tooltip
            hasArrow
            placement="top"
            label={<FormattedMessage id="previewer.actions.separate" />}
          >
            <Button
              as="a"
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              paddingInline={2}
              minW={6}
            >
              <Icon as={AiOutlineBranches} />
            </Button>
          </Tooltip>
        )}
        {!forceShowCode && (
          <Tooltip
            hasArrow
            placement="top"
            label={
              <FormattedMessage
                id={
                  isOpen
                    ? 'previewer.actions.code.shrink'
                    : 'previewer.actions.code.expand'
                }
              />
            }
          >
            <Button
              onClick={onToggle}
              variant="ghost"
              paddingInline={2}
              minW={6}
            >
              <Icon as={isOpen ? BsCode : BsCodeSlash} />
            </Button>
          </Tooltip>
        )}
      </HStack>
      <Collapse animateOpacity in={isOpen}>
        {isSingleFile ? (
          <SourceCode
            lang={computedLang()}
            showlinenumber={showlinenumber}
            theme={sourceCodeTheme}
          >
            {files[0][1].value}
          </SourceCode>
        ) : (
          <Tabs colorScheme="brand">
            <TabList>
              {files.map(([filename], i) => (
                <Tab key={i}>{filename}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {files.map(([, { value }], i) => (
                <TabPanel key={i} padding={0}>
                  <SourceCode
                    lang={computedLang(i)}
                    showlinenumber={showlinenumber}
                    theme={sourceCodeTheme}
                  >
                    {value}
                  </SourceCode>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        )}
      </Collapse>
    </>
  );
};

export default PreviewerActions;

import React, { type FC, useCallback, useMemo } from 'react';

import {
  openCodeSandbox,
  openStackBlitz,
  FormattedMessage,
  type IPreviewerProps
} from 'dumi';

// icons
import {
  AiOutlineCodeSandbox,
  AiOutlineThunderbolt,
  AiOutlineBranches
} from 'react-icons/ai';
import { BsCode, BsCodeSlash } from 'react-icons/bs';

import {
  Icon,
  Button,
  HStack,
  Tooltip,
  Collapse,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import Tabs, { TabList, TabPanel, TabPanels, Tab } from '../../builtins/Tabs';
import SourceCode, {
  type SourceCodeProps,
  type CodeTheme
} from '../../builtins/SourceCode';
import useThemeConfig from '../../hooks/useThemeConfig';

export type Actions = 'CSB' | 'CODEPEN' | 'STACKBLITZ' | 'EXTERNAL';

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
    theme: formatTheme
  } = props;
  const { code } = useThemeConfig();
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

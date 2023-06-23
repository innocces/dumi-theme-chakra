import React, { type FC, type PropsWithChildren, useMemo } from 'react';

import Highlight, {
  defaultProps,
  type Language,
  type PrismTheme
} from 'prism-react-renderer';
import { Stack, HStack, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Copy from '../../components/Copy';

import dracula from 'prism-react-renderer/themes/dracula';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import github from 'prism-react-renderer/themes/github';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwlDark from 'prism-react-renderer/themes/nightOwl';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import okaidia from 'prism-react-renderer/themes/okaidia';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import synthwave84 from 'prism-react-renderer/themes/synthwave84';
import ultramin from 'prism-react-renderer/themes/ultramin';
import vsLight from 'prism-react-renderer/themes/vsLight';
import vsDark from 'prism-react-renderer/themes/vsDark';

export enum PRISMTHEME {
  DRACULA = 'dracula',
  DUOTONEDARE = 'duotoneDark',
  DUOTONELIGHT = 'duotoneLight',
  GITHUB = 'github',
  NIGHTOWLLIGHT = 'nightOwlLight',
  NIGHTOWLDARK = 'nightOwl',
  OCEANICNEXT = 'oceanicNext',
  OKAIDIA = 'okaidia',
  PALENIGHT = 'palenight',
  SHADESOFPURPLE = 'shadesOfPurple',
  SYNTHWAVE84 = 'synthwave84',
  ULTRAMIN = 'ultramin',
  VSLIGHT = 'vsLight',
  VSDARK = 'vsDark'
}

export const prismThemes: Record<PRISMTHEME, PrismTheme> = {
  [PRISMTHEME.DRACULA]: dracula,
  [PRISMTHEME.DUOTONELIGHT]: duotoneLight,
  [PRISMTHEME.DUOTONEDARE]: duotoneDark,
  [PRISMTHEME.GITHUB]: github,
  [PRISMTHEME.NIGHTOWLLIGHT]: nightOwlLight,
  [PRISMTHEME.NIGHTOWLDARK]: nightOwlDark,
  [PRISMTHEME.OCEANICNEXT]: oceanicNext,
  [PRISMTHEME.OKAIDIA]: okaidia,
  [PRISMTHEME.PALENIGHT]: palenight,
  [PRISMTHEME.SHADESOFPURPLE]: shadesOfPurple,
  [PRISMTHEME.SYNTHWAVE84]: synthwave84,
  [PRISMTHEME.ULTRAMIN]: ultramin,
  [PRISMTHEME.VSLIGHT]: vsLight,
  [PRISMTHEME.VSDARK]: vsDark
};

export type CodeTheme =
  | PRISMTHEME
  | PRISMTHEME[]
  | { light: PRISMTHEME; dark: PRISMTHEME };

export type SourceCodeProps = {
  lang: Language;
  showlinenumber?: boolean;
  theme?: CodeTheme;
};

const defaultTheme: CodeTheme = {
  dark: PRISMTHEME.VSDARK,
  light: PRISMTHEME.VSLIGHT
};

/**
 * define DSL which can be highlighted as similar language
 */
const SIMILAR_DSL: Record<string, Language> = {
  acss: 'css',
  axml: 'markup'
};

const SourceCode: FC<PropsWithChildren<SourceCodeProps>> = ({
  children,
  lang,
  showlinenumber,
  theme
}) => {
  const [lightTheme, darkTheme] = useMemo<PrismTheme[]>(() => {
    const propsTheme = theme ?? defaultTheme;
    if (typeof propsTheme === 'string' && propsTheme in prismThemes)
      return [prismThemes[propsTheme], prismThemes[propsTheme]];
    if (
      Array.isArray(propsTheme) &&
      propsTheme.every((v) => typeof v === 'string' && prismThemes[v])
    )
      return propsTheme.map((v) => prismThemes[v]);
    if (
      typeof propsTheme === 'object' &&
      'light' in propsTheme &&
      'dark' in propsTheme &&
      Object.values(propsTheme).every((v) => prismThemes[v])
    )
      return [prismThemes[propsTheme.light], prismThemes[propsTheme.dark]];
    return [prismThemes[defaultTheme.light], prismThemes[defaultTheme.dark]];
  }, [theme]);

  const hightLightTheme = useColorModeValue(lightTheme, darkTheme);

  return (
    <Stack w="full" position="relative">
      <HStack
        w="full"
        justifyContent="flex-end"
        position="absolute"
        top={0}
        left={0}
        opacity={0}
        transitionDuration="0.3s"
        transitionProperty="opacity"
        _hover={{
          opacity: 1
        }}
      >
        <Copy text={children as string} colorScheme="brand" variant="ghost" />
      </HStack>
      <Highlight
        {...defaultProps}
        theme={hightLightTheme}
        code={(children as string)!.trim()}
        language={SIMILAR_DSL[lang] ?? lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            className={className}
            style={style}
            mt="0!important"
            paddingBlock={4}
            paddingInline={5}
            overflow="auto"
          >
            {tokens.map((line, i) => (
              <Box
                key={i}
                {...getLineProps({ line, key: i })}
                display="flex"
                alignItems="center"
              >
                {showlinenumber && (
                  <Text ml={-2} mr={2} opacity={0.4}>
                    {i + 1}
                  </Text>
                )}
                <Box>
                  {line.map((token, key) => (
                    <Text
                      as="span"
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Highlight>
    </Stack>
  );
};

export default SourceCode;

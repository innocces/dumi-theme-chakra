import React, { type FC, type AnchorHTMLAttributes } from 'react';

import useThemeConfig from '../../hooks/useThemeConfig';

import { Stack, Button, Icon } from '@chakra-ui/react';
import { VscGithub as Github } from 'react-icons/vsc';
import { SiDiscord as Discord } from 'react-icons/si';

/**
 * @description social type enum
 */
export enum SOCIALS {
  /**
   * github
   */
  GITHUB = 'github',
  /**
   * discord
   */
  DISCORD = 'discord'
}

/**
 * @description social item config
 */
export type SocialItem = {
  /**
   * @descripion alt or label message
   */
  name: string;
  /**
   * @description element a href sources
   */
  link: string;
  /**
   * @description anchor open way
   * @default __blank
   */
  target: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};

export type SocialMap = Record<SOCIALS, SocialItem>;

const Social: FC = () => {
  const themeConfig = useThemeConfig();
  const social = themeConfig.social;

  if (!social || !Object.keys(social).length) return null;

  return (
    <Stack direction="row" spacing={0}>
      {Object.entries(social).map(
        ([type, { name, link, target = '__blank' }]) => (
          <Button
            as="a"
            variant="ghost"
            datatype={name}
            href={link}
            key={type}
            target={target}
            fontSize="xl"
            padding={0}
          >
            {type === SOCIALS.GITHUB ? (
              <Icon as={Github} />
            ) : (
              <Icon as={Discord} />
            )}
          </Button>
        )
      )}
    </Stack>
  );
};

export default Social;

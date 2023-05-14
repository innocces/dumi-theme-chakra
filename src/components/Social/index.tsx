import React, { type FC, type AnchorHTMLAttributes } from 'react';

import useThemeConfig from '../../hooks/useThemeConfig';

import { Stack, Button, Icon, Image } from '@chakra-ui/react';
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

export type Socials = 'github' | 'discord' | string;

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
   * @description custom icon url
   */
  icon?: string;
  /**
   * @description anchor open way
   * @default __blank
   */
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};

export type SocialMap = Partial<Record<Socials, SocialItem>>;

const Social: FC = () => {
  const themeConfig = useThemeConfig();
  const social = themeConfig.social;

  if (!social || !Object.keys(social).length) return null;

  return (
    <Stack direction="row" spacing={0}>
      {Object.entries(social).map(([type, socialItem]) => {
        const { name, link, target = '__blank', icon } = socialItem!;
        const socialIcon =
          type === 'github' ? (
            <Icon as={Github} />
          ) : type === 'discord' ? (
            <Icon as={Discord} />
          ) : null;
        return (
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
            {icon ? <Image src={icon} width={20} height={20} /> : socialIcon}
          </Button>
        );
      })}
    </Stack>
  );
};

export default Social;

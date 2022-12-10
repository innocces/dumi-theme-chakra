import React, { type FC, useMemo } from 'react';

import {
  Box,
  Container,
  Text,
  Center,
  HStack,
  Button,
  Image
} from '@chakra-ui/react';
import Discord from '../../components/Icons/Discord';
import Github from '../../components/Icons/Github';
import HeroTitle from '../HeroTitle';
import { Link } from 'dumi';

import useHero from '../../hooks/useHero';

import { isOutLink, isEmpty } from '../../factory/tools';

export type HeroConfig = {
  /**
   * @description whether show version badge
   * @description.zh-CN 是否展示版本标签
   */
  showVersionBadge?: boolean;
};

const icons = {
  github: <Github />,
  discord: <Discord />
};

const ActionLeftIcon: FC<{ icon: string }> = ({ icon }) =>
  // @ts-ignore
  icons[icon] ?? <Image src={icon} alt="action button left icon" />;

const Hero: FC = () => {
  const hero = useHero();

  const { actions, description } = hero ?? {};

  const showActionButtons = useMemo<boolean>(() => {
    return !!actions?.length;
  }, [actions]);

  if (isEmpty(hero)) return null;

  return (
    <Box>
      <Container maxW="container.xxl" p={{ base: 10, md: 16 }}>
        <HeroTitle />
        <Center>
          <Text
            fontSize="2xl"
            textAlign="center"
            fontWeight="semibold"
            p={{ base: 4, md: 8 }}
            pt={4}
          >
            {description}
          </Text>
        </Center>
        {showActionButtons && (
          <Center>
            <HStack wrap="wrap">
              {actions!.map(({ icon, text, link }, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={!index ? 'solid' : 'outline'}
                  colorScheme={!index ? 'brand' : undefined}
                  leftIcon={icon ? <ActionLeftIcon icon={icon} /> : undefined}
                  mb={2}
                >
                  {link ? (
                    isOutLink(link) ? (
                      <a href={link} target="_blank" rel="noreferrer">
                        {text}
                      </a>
                    ) : (
                      <Link to={link}>{text}</Link>
                    )
                  ) : (
                    text
                  )}
                </Button>
              ))}
            </HStack>
          </Center>
        )}
      </Container>
    </Box>
  );
};

export default Hero;

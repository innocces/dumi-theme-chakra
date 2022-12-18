import React, { type FC, type PropsWithChildren, type ReactNode } from 'react';

import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export type AdProps = {
  /**
   * @description Ad image
   * @description.zh-CN 广告左侧图片
   */
  image?: string;
  /**
   * @description button words
   * @description.zh-CN 按钮文字
   */
  submit?: ReactNode;
  /**
   * @description Ad description
   * @description.zh-CN 广告内容, 默认取children
   */
  description?: ReactNode;
  /**
   * @description Ad title
   * @description.zh-CN 广告标题
   */
  title?: ReactNode;
  /**
   * @description button link
   * @description.zh-CN 底部按钮链接
   */
  link?: string;
};

const Ad: FC<PropsWithChildren<AdProps>> = ({
  image,
  children,
  description,
  submit,
  title,
  link
}) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      shadow="md"
    >
      {!!image?.length && (
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={image}
          alt="ad image"
        />
      )}

      <Stack>
        <CardBody>
          {!!title && <Heading size="md">{title}</Heading>}

          <Text py="2">{children ?? description}</Text>
        </CardBody>

        {(!!submit || !!link) && (
          <CardFooter>
            <Button
              as="a"
              href={link}
              target="_blank"
              referrerPolicy="no-referrer"
              variant="solid"
              colorScheme="brand"
              rightIcon={<ExternalLinkIcon />}
            >
              {submit}
            </Button>
          </CardFooter>
        )}
      </Stack>
    </Card>
  );
};

export default Ad;

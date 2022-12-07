import React, { type FC, useState } from 'react';

import { Box, Center, Heading, CloseButton, Collapse } from '@chakra-ui/react';

import useThemeConfig from '../../hooks/useThemeConfig';

import { ANNOUNCEMENT } from '../../constant/storage';

export type AnnouncementBarConfig = {
  /**
   * @description whether announce closeable
   */
  isCloseable?: boolean;
  /**
   * @description announce text color
   */
  textColor?: string;
  /**
   * @description announce background color
   */
  backgroundColor?: string;
  /**
   * @description announce dom id
   */
  id: string;
  /**
   * @description announce content, like html string
   */
  content: string;
};

const AnnouncementBar: FC = () => {
  const [showAnnounce, setAnnounce] = useState<boolean>(
    !Number(localStorage.getItem(ANNOUNCEMENT))
  );
  const { announcementBar } = useThemeConfig();

  if (!announcementBar) return null;

  const {
    content,
    id,
    isCloseable,
    textColor = 'brand.500',
    backgroundColor
  } = announcementBar;

  return (
    <Collapse in={showAnnounce} startingHeight={0}>
      <Box
        id={id}
        display="flex"
        alignItems="center"
        bgColor={backgroundColor}
        color={textColor}
      >
        <Center flexGrow={1}>
          <Heading
            as="h4"
            size="sm"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Center>
        {isCloseable && (
          <CloseButton
            onClick={() => {
              localStorage.setItem(ANNOUNCEMENT, '1');
              setAnnounce(false);
            }}
          />
        )}
      </Box>
    </Collapse>
  );
};

export default AnnouncementBar;

import { Scrollspy as ScrollSpy } from '@makotot/ghostui/src/Scrollspy';
import { Link, useLocation, useRouteMeta, useSiteData } from 'dumi';
import React, {
  useEffect,
  useRef,
  useState,
  type FC,
  type RefObject
} from 'react';

import {
  Text,
  List,
  ListItem,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';

const Href = chakra(Link);

const Toc: FC = () => {
  const { pathname, search } = useLocation();
  const meta = useRouteMeta();
  const { loading } = useSiteData();
  const prevIndexRef = useRef(0);
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([]);
  const borderLeftColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  // only render h2 ~ h4
  const toc = meta.toc.filter(({ depth }) => depth > 1 && depth < 4);

  useEffect(() => {
    // wait for page component ready (DOM ready)
    if (!loading) {
      // find all valid headings as ref elements
      const refs = toc.map(({ id }) => ({
        // @ts-ignore
        current: document.getElementById(id)
      }));

      setSectionRefs(refs as any);
    }
  }, [pathname, search, loading]);

  return sectionRefs.length ? (
    <ScrollSpy sectionRefs={sectionRefs}>
      {({ currentElementIndexInViewport }) => {
        // for keep prev item active when no item in viewport
        if (currentElementIndexInViewport > -1)
          prevIndexRef.current = currentElementIndexInViewport;

        const activeIndex =
          currentElementIndexInViewport > -1
            ? currentElementIndexInViewport
            : prevIndexRef.current;

        return (
          <List
            position="relative"
            _empty={{ display: 'none' }}
            pl={4}
            borderLeft="1px solid"
            h="max-content"
            borderLeftColor={borderLeftColor}
            _before={{
              content: '""',
              display: 'block',
              position: 'absolute',
              top: `calc(var(--chakra-sizes-7) * ${activeIndex})`,
              left: '-0.5px',
              h: 7,
              w: 'px',
              bg: 'brand.300',
              transitionProperty: 'top',
              transitionDuration: '0.3s'
            }}
          >
            {toc
              .filter(({ depth }) => depth > 1 && depth < 4)
              .map((item, i) => {
                const link = `#${encodeURIComponent(item.id)}`;

                return (
                  <ListItem
                    key={item.id}
                    data-depth={item.depth}
                    lineHeight={7}
                    sx={{
                      '&[data-depth=3]': {
                        pl: 2
                      }
                    }}
                  >
                    <Href
                      to={link}
                      title={item.title}
                      {...(activeIndex === i ? { 'data-active': true } : {})}
                      _active={{ color: 'brand.300' }}
                      transitionProperty="color"
                      transitionDuration="0.3s"
                    >
                      <Text
                        fontSize="sm"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        {item.title}
                      </Text>
                    </Href>
                  </ListItem>
                );
              })}
          </List>
        );
      }}
    </ScrollSpy>
  ) : null;
};

export default Toc;

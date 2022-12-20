import { mode } from '@chakra-ui/theme-tools';
import type { SystemStyleFunction } from '@chakra-ui/react';

const markDown: SystemStyleFunction = (props) => ({
  '.markdown': {
    a: {
      color: mode('brand.500', 'brand.300')(props)
    },

    img: {
      maxWidth: 'full'
    },

    '*:not(pre) code': {
      px: 0.5,
      py: 1.5
    },

    pre: {
      fontSize: 'sm',
      px: 6,
      bgColor: 'gray.50'
    },

    table: {
      w: 'full',

      th: {
        bgColor: 'gray.50'
      },

      'th, td': {
        px: 2.5,
        py: 4,
        borderColor: 'gray.100'
      }
    },

    ul: {
      li: {
        lineHeight: 'tall'
      }
    },

    'h1, h2, h3, h4, h5, h6': {
      cursor: 'pointer',

      '> a[aria-hidden]:first-of-type': {
        float: 'left',
        width: 5,
        paddingInlineEnd: 1,
        marginInlineStart: -6,
        fontSize: 0,
        textAlign: 'left',
        lineHeight: 'inhert',

        '&:hover': {
          border: 0
        },

        '> .icon-link': {
          transitionProperty: 'visibility',
          transitionDuration: '.3s',

          '&::before': {
            content: '"#"',
            fontSize: 'xl'
          }
        }
      },

      '&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link': {
        visibility: 'hidden'
      }
    }
  }
});

export default markDown;

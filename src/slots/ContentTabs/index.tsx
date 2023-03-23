import { useRouteMeta, FormattedMessage } from 'dumi';
import React, { type FC, useMemo } from 'react';

import { Tabs, TabList, Tab } from '@chakra-ui/react';

type IContentTabs = ReturnType<typeof useRouteMeta>['tabs'];

export interface IContentTabsProps {
  tabs: IContentTabs;
  tabKey: string | null;
  onChange: (tab?: NonNullable<IContentTabs>[0]) => void;
}

const ContentTabs: FC<IContentTabsProps> = ({ tabs, tabKey, onChange }) => {
  // TODO: tab.Extra & tab.Action render

  const computedTabIndex = useMemo(() => {
    return tabs?.length && tabKey
      ? Math.max(tabs.findIndex((v) => v.key === tabKey) + 1, 0)
      : 0;
  }, [tabs, tabKey]);

  return Boolean(tabs?.length) ? (
    <Tabs
      index={computedTabIndex}
      onChange={(activeIndex) =>
        activeIndex ? onChange(tabs![activeIndex - 1]) : onChange()
      }
      mt={-4}
      mb={4}
      colorScheme="brand"
      position="sticky"
      top={0}
    >
      <TabList
        borderBottom={1}
        borderBottomStyle="solid"
        borderBottomColor="inherit"
      >
        <Tab>
          <FormattedMessage id="content.tabs.default" />
        </Tab>
        {tabs!.map(({ key, titleIntlId, meta }) => (
          <Tab key={key}>
            {titleIntlId ? (
              <FormattedMessage id={titleIntlId} />
            ) : (
              meta.frontmatter.title
            )}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  ) : // <ul className="dumi-default-content-tabs">
  //   <li onClick={() => onChange()} data-active={!key || undefined}>
  //     <button type="button">
  //       {intl.formatMessage({ id: 'content.tabs.default' })}
  //     </button>
  //   </li>
  //   {tabs!.map((tab) => (
  //     <li
  //       key={tab.key}
  //       onClick={() => onChange(tab)}
  //       data-active={key === tab.key || undefined}
  //     >
  //       <button type="button1">
  //         {tab.titleIntlId
  //           ? intl.formatMessage({ id: tab.titleIntlId })
  //           : tab.meta.frontmatter.title}
  //       </button>
  //     </li>
  //   ))}
  // </ul>
  null;
};

export default ContentTabs;

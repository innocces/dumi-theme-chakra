import { useEffect, useCallback, useState } from 'react';
import type { SearchResult, SearchFlatData } from '../slots/SearchBar';

export default function useFlatSearchData(data: SearchResult) {
  const update = useCallback((): [SearchFlatData, number] => {
    let activeIndex = 0;
    const ret: SearchFlatData = [];

    data.forEach((item) => {
      if (item.title) {
        ret.push({
          type: 'title',
          value: {
            title: item.title
          }
        });
      }
      item.hints.forEach((hint) => {
        ret.push({
          type: 'hint',
          activeIndex: activeIndex++,
          value: hint
        });
      });
    });

    return [ret, activeIndex];
  }, [data]);
  const [flatData, setFlatData] = useState(update);

  useEffect(() => {
    setFlatData(update);
  }, [data]);

  return flatData;
}

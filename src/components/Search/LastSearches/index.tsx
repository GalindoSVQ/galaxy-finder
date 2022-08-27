import { LastSearch } from 'components/Search/LastSearches/styles';
import { Dispatch } from 'react';
import { LastSearch as LastSearchType } from 'types';

type Props = {
  lastSearchs: Array<LastSearchType>;
  setCurrentSearch: Dispatch<React.SetStateAction<LastSearchType>>;
};

function LastSearchs({ lastSearchs, setCurrentSearch }: Props) {
  return (
    <LastSearch>
      {lastSearchs.map((search) =>
        search.text ? (
          <li key={search.id} onClick={() => setCurrentSearch(search)} role="button">
            {search.text}
          </li>
        ) : null
      )}
    </LastSearch>
  );
}

export { LastSearchs };

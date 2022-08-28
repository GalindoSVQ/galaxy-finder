import { capitalize } from '@utilities/format';
import { getNextPage } from 'api/getNextPage';
import { Button, Container } from 'components/AccordionCard/styles';
import { Card } from 'components/Card';
import { Dispatch, SetStateAction } from 'react';
import { Entities, EntitiesName, LastSearch, Response } from 'types';

type Props = {
  currentSearch: LastSearch;
  data?: Response<Entities>;
  entity: EntitiesName;
  setLastSearchs: Dispatch<SetStateAction<LastSearch[]>>;
};

function AccordionCard({ currentSearch, data, entity, setLastSearchs }: Props) {
  if (!data) {
    return null;
  }

  const { count, results, next } = data;
  const entityString = capitalize(entity);

  const findSearchIndex = (text: LastSearch['text'], currentSearchs: LastSearch[]) =>
    currentSearchs.findIndex((search) => search.text === text);

  const findEntityIndex = (entity: EntitiesName, currentSearchs: LastSearch) =>
    currentSearchs.data.findIndex((result) => result.entity === entity);

  const loadMoreHandler = async () => {
    const { results: newResults, next: newNextPage } = await getNextPage(next);

    setLastSearchs((currentSearchs) => {
      const newSearchs = [...currentSearchs];
      const searchIndex = findSearchIndex(currentSearch.text, newSearchs);

      if (currentSearch.text !== null) {
        const entityIndex = findEntityIndex(entity, newSearchs[searchIndex]);

        newSearchs[searchIndex].data[entityIndex].next = newNextPage;
        newSearchs[searchIndex].data[entityIndex].results = [
          ...currentSearchs[searchIndex].data[entityIndex].results,
          ...newResults
        ];
      }

      return newSearchs;
    });
  };

  return (
    <Container>
      {results.length ? (
        results.map((result) => <Card key={result.url} data={result} entity={entity} />)
      ) : (
        <p>Yay, no {entityString} found.</p>
      )}
      {!!results.length && (
        <>
          <p>
            Showing {results.length} of {count} {entityString}(s)
          </p>
          {next && <Button onClick={loadMoreHandler}>{`Load more ${entityString}!`}</Button>}
        </>
      )}
    </Container>
  );
}
export { AccordionCard };

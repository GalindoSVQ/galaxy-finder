import { capitalize } from '@utilities/format';
import { getNextPage } from 'api/getNextPage';
import { Button, Container } from 'components/AccordionCard/styles';
import { Card } from 'components/Card';
import { Dispatch, SetStateAction } from 'react';
import { Entities, EntitiesName, LastSearch, Response } from 'types';

type Props = {
  currentSearch: LastSearch;
  data: Response<Entities>;
  entity: EntitiesName;
  setLastSearchs: Dispatch<SetStateAction<LastSearch[]>>;
};

function AccordionCard({ currentSearch, data, entity, setLastSearchs }: Props) {
  const { count, results, next } = data;
  const entityString = capitalize(entity);

  const loadMoreHandler = async () => {
    const { results: newResults, next: newNextPage } = await getNextPage(next);

    setLastSearchs((currentSearchs) => {
      const newSearchs = [...currentSearchs];
      const search = newSearchs.find((search) => search.text === currentSearch.text);
      const entityIndex = search?.results.findIndex((result) => result.path === entity);

      if (entityIndex !== undefined && search !== undefined) {
        search.results[entityIndex].results = search.results[entityIndex].results.concat(newResults);
        search.results[entityIndex].next = newNextPage;
      }

      return newSearchs;
    });
  };

  return (
    <Container>
      {results.length ? (
        results.map((result) => {
          return <Card key={result.url} data={result} entity={entity} />;
        })
      ) : (
        <p>Yay, no {entityString} found.</p>
      )}
      {!!results.length && (
        <>
          <p>
            Showing {results?.length} of {count} {entityString}(s)
          </p>
          {next && (
            <Button disabled={next === undefined} onClick={loadMoreHandler}>
              {`Load more ${entityString}!`}
            </Button>
          )}
        </>
      )}
    </Container>
  );
}
export { AccordionCard };

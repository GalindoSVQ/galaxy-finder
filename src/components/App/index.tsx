import { fillLastSearchs } from '@utilities/fillLastSearchs';
import { Accordion } from 'components/Accordion';
import { AccordionCard } from 'components/AccordionCard';
import { Content } from 'components/App/styles';
import { Head } from 'components/Head';
import { Search } from 'components/Search';
import { LastSearchs } from 'components/Search/LastSearches';
import { useState } from 'react';
import { LastSearch } from 'types';

function App() {
  const [lastSearchs, setLastSearchs] = useState<Array<LastSearch>>(fillLastSearchs);
  const [currentSearch, setCurrentSearch] = useState<LastSearch>(lastSearchs[0]);

  const filterEntity = (entity: string) => currentSearch.data?.find((result) => result.entity === entity);

  const items = [
    {
      title: 'Films',
      content: (
        <AccordionCard
          data={filterEntity('films')}
          entity="films"
          setLastSearchs={setLastSearchs}
          currentSearch={currentSearch}
        />
      ),
      show: !!filterEntity('films')
    },
    {
      title: 'Planets',
      content: (
        <AccordionCard
          data={filterEntity('planets')}
          entity="planets"
          setLastSearchs={setLastSearchs}
          currentSearch={currentSearch}
        />
      ),
      show: !!filterEntity('planets')
    },
    {
      title: 'Species',
      content: (
        <AccordionCard
          data={filterEntity('species')}
          entity="species"
          setLastSearchs={setLastSearchs}
          currentSearch={currentSearch}
        />
      ),
      show: !!filterEntity('species')
    },
    {
      title: 'Starships',
      content: (
        <AccordionCard
          data={filterEntity('starships')}
          entity="starships"
          setLastSearchs={setLastSearchs}
          currentSearch={currentSearch}
        />
      ),
      show: !!filterEntity('starships')
    },
    {
      title: 'Vehicles',
      content: (
        <AccordionCard
          data={filterEntity('vehicles')}
          entity="vehicles"
          setLastSearchs={setLastSearchs}
          currentSearch={currentSearch}
        />
      ),
      show: !!filterEntity('vehicles')
    }
  ];

  return (
    <>
      <Head />
      <Search
        currentSearch={currentSearch}
        lastSearchs={lastSearchs}
        setCurrentSearch={setCurrentSearch}
        setLastSearchs={setLastSearchs}
      >
        <LastSearchs lastSearchs={lastSearchs} setCurrentSearch={setCurrentSearch} />
      </Search>
      <Content>
        <Accordion items={items} />
      </Content>
    </>
  );
}

export { App };

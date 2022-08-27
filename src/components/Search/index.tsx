import { ReactComponent as SearchIcon } from '@icons/search.svg';
import { ReactComponent as XIcon } from '@icons/x.svg';
import { capitalize } from '@utilities/format';
import { getAllEntities } from 'api/getAllEntities';
import { ButtonSearch, Container, Form, Input } from 'components/Search/styles';
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { LastSearch } from 'types';

type Props = PropsWithChildren & {
  currentSearch: LastSearch;
  lastSearchs: Array<LastSearch>;
  setCurrentSearch: Dispatch<SetStateAction<LastSearch>>;
  setLastSearchs: Dispatch<SetStateAction<Array<LastSearch>>>;
};

function Search({ currentSearch, children, lastSearchs, setCurrentSearch, setLastSearchs }: Props) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const hasText = !!inputValue.trim().length;

  const searchButtonHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value.trim() ?? '';
    const findNullValueIndex = lastSearchs.findIndex((search) => search.text === null);
    const notIncludeValue = !lastSearchs.some(({ text }) => text === inputValue);

    try {
      if (notIncludeValue && !!inputValue) {
        if (findNullValueIndex !== -1) {
          const newState = [...lastSearchs];
          const id = newState[findNullValueIndex].id;
          const { results } = await getAllEntities(inputValue, id);

          newState[findNullValueIndex].text = inputValue;
          newState[findNullValueIndex].results = results;

          setLastSearchs(newState);
          setCurrentSearch(newState[findNullValueIndex]);
        } else {
          const nextId = lastSearchs[lastSearchs.length - 1].id + 1;
          const newSearch = await getAllEntities(inputValue, nextId);
          const newID = lastSearchs[lastSearchs.length - 1].id + 1;
          newSearch.id = newID;
          setLastSearchs([...lastSearchs.slice(1), newSearch]);
          setCurrentSearch(newSearch);
        }
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error searchButtonHandler');
    }
  };

  const setInputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    const formatValue = capitalize(value.toLowerCase());

    setInputValue(formatValue);
  };

  useEffect(() => {
    currentSearch.text && setInputValue(currentSearch.text);
  }, [currentSearch.text]);

  return (
    <Container>
      <Form>
        <SearchIcon onClick={() => inputRef.current?.focus()} />
        <Input
          ref={inputRef}
          type="text"
          id="search"
          name="search"
          value={inputValue}
          onChange={setInputValueHandler}
          maxLength={30}
          placeholder="Searh the Force..."
        />
        {hasText && <XIcon onClick={() => setInputValue('')} />}
        <ButtonSearch onClick={searchButtonHandler}>Go</ButtonSearch>
      </Form>
      {children}
    </Container>
  );
}

export { Search };

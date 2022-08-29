import { fireEvent } from '@testing-library/react';
import { render, screen } from '@utilities/testUtils';
import { Search } from 'components/Search';
import { LastSearchs } from 'components/Search/LastSearches';

const mockSearchs = [
  {
    id: '0',
    text: 'FirstSearch',
    data: []
  },
  {
    id: '1',
    text: 'SecondSearch',
    data: []
  },
  {
    id: '2',
    text: 'ThirdSearch',
    data: []
  }
];

describe('<Search />', () => {
  test('should render input and button', () => {
    render(
      <Search lastSearchs={[]} setLastSearchs={vi.fn()} currentSearch={mockSearchs[0]} setCurrentSearch={vi.fn()}>
        <LastSearchs lastSearchs={[]} setCurrentSearch={vi.fn()} />
      </Search>
    );

    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  }),
    test('should render last searchs', () => {
      render(
        <Search
          lastSearchs={mockSearchs}
          setLastSearchs={vi.fn()}
          currentSearch={mockSearchs[0]}
          setCurrentSearch={vi.fn()}
        >
          <LastSearchs lastSearchs={mockSearchs} setCurrentSearch={vi.fn()} />
        </Search>
      );

      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 'FirstSearch' } });
      fireEvent.click(screen.getAllByRole('button')[0]);
      expect((input as HTMLInputElement).value).toBe('FirstSearch');

      fireEvent.change(input, { target: { value: 'SecondSearch' } });
      fireEvent.click(screen.getAllByRole('button')[0]);
      expect((input as HTMLInputElement).value).toBe('SecondSearch');

      fireEvent.change(input, { target: { value: 'ThirdSearch' } });
      fireEvent.click(screen.getAllByRole('button')[0]);
      expect((input as HTMLInputElement).value).toBe('ThirdSearch');

      expect(screen.getByText('FirstSearch')).toBeDefined();
      expect(screen.getByText('SecondSearch')).toBeDefined();
      expect(screen.getByText('ThirdSearch')).toBeDefined();

      fireEvent.change(input, { target: { value: 'FourthSearch' } });
      fireEvent.click(screen.getAllByRole('button')[0]);
      expect((input as HTMLInputElement).value).toBe('FourthSearch');
    });
});

import { render, screen, waitFor } from '@utilities/testUtils';
import { Accordion } from 'components/Accordion';

describe('<Accordion />', () => {
  test('should render items', async () => {
    const items = [];

    for (let i = 0; i < 3; i++) {
      items.push({
        title: `Lorem ipsum. ${i}`,
        content: <>`Lorem ipsum dolor sit amet consectetur {i}`</>,
        show: i !== 2
      });
    }

    render(<Accordion items={items} />);

    const titleFirstElement = screen.getByText('Lorem ipsum. 0');
    expect(titleFirstElement).toBeDefined();

    const titleSecondElement = screen.getByText('Lorem ipsum. 1');
    expect(titleSecondElement).toBeDefined();

    await waitFor(() => {
      expect(screen.queryByText('Lorem ipsum. 2')).toBeNull();
    });
  });
});

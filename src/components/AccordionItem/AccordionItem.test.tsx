import { fireEvent } from '@testing-library/react';
import { render, screen } from '@utilities/testUtils';
import { AccordionItem } from 'components/AccordionItem';

describe('<AccordionItem />', () => {
  const title = 'Lorem ipsum dolor sit amet.';
  const content = <>Lorem ipsum, dolor sit amet consectetur!</>;
  const show = false;
  const text = 'Lorem ipsum, dolor sit amet consectetur!';

  test('should render content', () => {
    render(<AccordionItem data={{ title, content, show }} isOpen={false} btnOnClick={vi.fn()} />);

    const titleEl = screen.queryByText(title);
    const contentEl = screen.queryByText(text);

    expect(titleEl).toBeTruthy();
    expect(contentEl).toBeTruthy();
  });

  test('should not display content if isOpen is false', () => {
    render(
      <AccordionItem
        data={{
          title,
          content,
          show
        }}
        isOpen={false}
        btnOnClick={vi.fn()}
      />
    );

    const listEl = screen.getByRole('listitem');
    expect(listEl.classList.contains('active')).toBeFalsy();
  });

  test('should call btnOnClick on title click', () => {
    const btnOnClickMock = vi.fn();

    render(
      <AccordionItem
        data={{
          title,
          content,
          show
        }}
        isOpen={false}
        btnOnClick={btnOnClickMock}
      />
    );

    const titleEl = screen.queryByText(title) as HTMLButtonElement;

    fireEvent.click(titleEl);

    expect(btnOnClickMock).toBeCalledTimes(1);
  });
});

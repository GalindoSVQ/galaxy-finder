import { renderQuotes } from '@utilities/renderQuotes';
import { AccordionList, Button, Container, Content, Item, Title } from 'components/Accordion/styles';
import { useRef, useState } from 'react';
import { AccordionData } from 'types';

export function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const contentRef = useRef<HTMLDivElement>(null);

  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  if (items.every((item) => !item.show)) {
    return renderQuotes();
  }

  return (
    <AccordionList>
      {items.map((item, idx) =>
        item.show ? (
          <Item key={idx}>
            <Title>
              <Button $isOpen={idx === currentIdx} onClick={() => btnOnClick(idx)}>
                {item.title}
              </Button>
            </Title>
            <Container $isOpen={idx === currentIdx} role="main">
              <Content ref={contentRef}>{item.content}</Content>
            </Container>
          </Item>
        ) : null
      )}
    </AccordionList>
  );
}

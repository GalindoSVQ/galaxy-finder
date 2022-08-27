import { Button, Container, Content, Item, Title } from 'components/AccordionItem/styles';
import { useRef } from 'react';
import { AccordionData } from 'types';

type Props = {
  btnOnClick: () => void;
  data: AccordionData;
  isOpen: boolean;
};

export function AccordionItem({ btnOnClick, data: { title, content }, isOpen }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Item>
      <Title>
        <Button $isOpen={isOpen} onClick={btnOnClick}>
          {title}
        </Button>
      </Title>
      <Container $isOpen={isOpen} role="main">
        <Content ref={contentRef}>{content}</Content>
      </Container>
    </Item>
  );
}

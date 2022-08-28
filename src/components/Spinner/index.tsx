import { Circle, Container, Text } from 'components/Spinner/styles';

type Props = {
  placeholder?: string;
};

function Spinner({ placeholder }: Props) {
  return (
    <>
      <Container width="45px" height="45px" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
        <Circle fill="none" strokeWidth="6" strokeLinecap="round" cx="23" cy="23" r="20"></Circle>
      </Container>
      <Text>{placeholder}</Text>
    </>
  );
}

export { Spinner };

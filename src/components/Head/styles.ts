import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  backdrop-filter: blur(2px) brightness(90%);
  position: sticky;
  top: 0;
  padding-bottom: 1rem;

  & svg {
    fill: white;
    width: 200px;
    height: auto;
    stroke: black;
    stroke-width: 3px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    justify-content: flex-start;
    padding: 0 2rem;

    & svg {
      width: 250px;
      height: auto;
      stroke: black;
      stroke-width: 5px;
    }
  }
`;

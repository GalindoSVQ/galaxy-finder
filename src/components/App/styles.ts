import styled from 'styled-components';

export const Title = styled.div`
  color: rebeccapurple;
  font-size: 1rem;
`;

export const Content = styled.div`
  padding: 0 0.5rem;

  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: center;

    & figure {
      font-size: 2rem;
    }
  }
`;

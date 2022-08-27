import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark100};
  box-shadow: -1px 2px 0px 1px rgba(255, 255, 255, 1);
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.white};

  & h4 {
    margin-top: 0;
  }

  & span {
    display: block;
    margin: 0.25rem 0;
  }
`;

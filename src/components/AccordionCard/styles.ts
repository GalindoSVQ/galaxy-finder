import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.25rem;

  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 1);
  }
`;

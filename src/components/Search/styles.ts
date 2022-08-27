import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 0.5rem;

  & > :last-child {
    min-height: 1.25rem;
  }

  @media ${({ theme }) => theme.device.desktop} {
    justify-content: flex-end;
    padding: 0 1rem;

    & > :last-child {
      min-height: 2rem;
    }
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
  width: 19rem;
  border-radius: 12px;

  & svg {
    color: ${({ theme }) => theme.colors.blue200};
    height: 1.5rem;
    width: auto;
    flex-shrink: 0;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 25rem;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  font-size: 1.15rem;
  min-width: 0;
  padding-left: 0.5rem;

  &:active,
  &:focus,
  &:disabled {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  background-color: ${({ theme }) => theme.colors.light300};
  border: 1px solid ${({ theme }) => theme.colors.light200};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
  padding: 0 8px;

  &:active {
    background-color: ${({ theme }) => theme.colors.light200};
  }
`;

import styled from 'styled-components';

export const LastSearch = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;
  width: 90%;
  padding: 0;
  margin: 0.75rem 0;

  & > li {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 6px;
    font-weight: ${({ theme }) => theme.fonts.bold};
    box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 1);
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.black};
      box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 1);
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    justify-content: center;
    gap: 1.5rem;
  }
`;

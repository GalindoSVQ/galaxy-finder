import chevronDown from '@icons/chevronDown.svg';
import styled, { css } from 'styled-components';

export const AccordionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.device.desktop} {
    width: 60%;
  }
`;

export const Button = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 0;
  padding: 12px 20px;
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  cursor: pointer;

  &::after {
    content: '';
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-left: auto;
    background-image: url(${chevronDown});
    background-repeat: no-repeat;
    background-size: 100%;
    transition: transform 0.2s ease-in-out;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(-180deg);
      `}
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0;
`;

export const Item = styled.li`
  &:not(:first-of-type) {
    border-top: 2px solid ${({ theme }) => theme.colors.black};
  }
`;

export const Container = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  height: ${({ $isOpen }) => ($isOpen ? 'auto' : 0)};
  transition: height 2s linear 1s;

  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-flow: row wrap;
  }
`;

export const Content = styled.div`
  border-top: 1px solid #cccccc;
  padding: 15px 20px;

  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
`;

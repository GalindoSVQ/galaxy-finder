import styled from 'styled-components';

const offset = 187;
const duration = '2.4s';

export const Container = styled.svg`
  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  animation: rotator ${duration} linear infinite;
`;

export const Circle = styled.circle`
  @keyframes dash {
    0% {
      stroke-dashoffset: ${offset};
    }
    50% {
      stroke-dashoffset: ${offset / 4};
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: ${offset};
      transform: rotate(450deg);
    }
  }

  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: white;
  animation: dash ${duration} ease-in-out infinite;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 1.5rem;
`;

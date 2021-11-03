import styled from 'styled-components';

export const StyledList = styled.ol`
  list-style: none;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledListElement = styled.li`
  margin: 10px 0;
  line-height: 150%;

  &:before {
    content: '○ ';
  }
`;

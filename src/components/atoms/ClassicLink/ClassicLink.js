import styled from 'styled-components';

export const ClassicLink = styled.a`
  text-decoration: none;
  color: ${({ isColor, theme }) => (isColor ? isColor : theme.colors.grey)};
  cursor: pointer;
  height: max-content;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 10px;
  }
`;

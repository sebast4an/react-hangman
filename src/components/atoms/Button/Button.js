import styled from 'styled-components';

export const Button = styled.button`
  width: max-content;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: 0;
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.white};
  }
`;

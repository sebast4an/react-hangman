import styled from 'styled-components';

export const Button = styled.button`
  width: 5px;
  height: 5px;
  padding: 14px 12px;
  margin: 2px;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border: 0;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black};
    cursor: not-allowed;

    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 600px) {
    padding: 18px;
  }
`;

import styled from 'styled-components';

export const Board = styled.main`
  width: 100%;
  margin: 0;
  padding: 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Hangman = styled.section`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Counters = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

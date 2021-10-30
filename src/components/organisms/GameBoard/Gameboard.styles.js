import styled from 'styled-components';

export const Board = styled.main`
  width: 100%;
  margin: 100px 0 0 0;
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

export const Image = styled.img`
  padding: 1px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.red};
  width: 100%;
`;

export const Word = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 5px;
  text-align: center;
`;

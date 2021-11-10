import styled from 'styled-components';

export const Board = styled.main`
  width: 100%;
  margin: 0;
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
  margin: 0 10px;
`;

export const NewGamePanel = styled.div`
  width: 100%;
`;

export const DefaultButton = styled.button`
  position: relative;
  border: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border: 2px solid ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.grey};
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 0;
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const Image = styled.img`
  max-width: 200px;
  height: auto;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
`;

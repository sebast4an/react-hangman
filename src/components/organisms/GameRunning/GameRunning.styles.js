import styled from 'styled-components';

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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 10px 0;
`;

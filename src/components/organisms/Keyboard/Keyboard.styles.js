import styled from 'styled-components';

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Button = styled.button`
  width: 5px;
  height: 5px;
  padding: 14px 12px;
  margin: 2px;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

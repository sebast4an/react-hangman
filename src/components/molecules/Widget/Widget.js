import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  position: fixed;
  top: 120px;
  right: -1px;
  z-index: 2;
  width: 300px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 0;
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transform: ${({ isHidden }) => (isHidden ? 'translateX(300px)' : 'translateX(0)')};
  transition: transform 0.5s ease-in-out;
`;

const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: -64px;
  transform: translateY(-50%) rotate(-90deg);
  background-color: ${({ theme }) => theme.colors.grey};
  border: 0;
  border-radius: 1rem 1rem 0 0;
  padding: 0.6rem 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 12px;
  cursor: pointer;
`;

const Widget = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { plays, wins, losers } = useSelector(state => state);

  const handleClick = () => setIsHidden(prevState => !prevState);

  return (
    <Wrapper isHidden={isHidden}>
      <Header>Number of games played: {plays}</Header>
      <Text>Winnings: {wins}</Text>
      <Text>Losers: {losers}</Text>
      <Button onClick={() => handleClick()}>Statistics</Button>
    </Wrapper>
  );
};

export default Widget;

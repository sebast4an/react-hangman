import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Header, Text, Button } from './Widget.styles';

const Widget = () => {
  const [isHidden, setIsHidden] = useState(true);
  const store = useSelector(state => state);
  const { plays, wins, losers } = store;

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

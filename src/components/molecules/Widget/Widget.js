import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 300px;
  height: 100px;
  background-color: green;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
`;

const Widget = () => {
  const { plays, wins, losers } = useSelector(state => state);

  return (
    <Wrapper>
      <p>Number of games played: {plays}</p>
      <p>Winnings: {wins}</p>
      <p>Losers: {losers}</p>
    </Wrapper>
  );
};

Widget.propTypes = {};
export default Widget;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Word = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 5px;
  text-align: center;
`;

const Words = ({ children }) => {
  return (
    <>
      <Word>{children}</Word>
    </>
  );
};

Words.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Words;

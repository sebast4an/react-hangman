import React from 'react';
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

export default Words;

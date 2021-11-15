import React from 'react';
import PropTypes from 'prop-types';
import { Word } from './Words.styles';

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

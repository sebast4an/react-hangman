import React from 'react';
import PropTypes from 'prop-types';
import { Word } from './Words.styles';

const Words = ({ children }) => {
  return (
    <>
      <Word title={'Guess the word'} aria-label={`The word currently discovered is: ${children}`}>
        {children}
      </Word>
    </>
  );
};

Words.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Words;

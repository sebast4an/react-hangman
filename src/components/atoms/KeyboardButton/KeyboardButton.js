import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from './KeyboardButton.styles';
const KeyboardButton = ({ children, handleSolution }) => {
  return (
    <>
      <Button onClick={handleSolution}>{children}</Button>
    </>
  );
};

// KeyboardButton.propTypes = {};
export default KeyboardButton;

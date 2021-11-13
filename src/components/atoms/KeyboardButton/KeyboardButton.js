import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from './KeyboardButton.styles';
const KeyboardButton = ({ children, handleButtons }) => {
  return (
    <>
      <Button onClick={handleButtons}>{children}</Button>
    </>
  );
};

// KeyboardButton.propTypes = {};
export default KeyboardButton;

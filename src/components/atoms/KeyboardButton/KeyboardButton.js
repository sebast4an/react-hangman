import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './KeyboardButton.styles';

const KeyboardButton = props => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  );
};

KeyboardButton.propTypes = {
  children: PropTypes.string,
};
export default KeyboardButton;

import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from './KeyboardButton.styles';
const KeyboardButton = ({ children, quessWord }) => {
  const solution = e => {
    const cliked = e.target.innerText.toLowerCase();

    if (quessWord.indexOf(cliked) !== -1) {
      console.log('namierzony!');
    } else console.log('nie znaleziony Panie generale');
  };

  return (
    <>
      <Button onClick={solution}>{children}</Button>
    </>
  );
};

// KeyboardButton.propTypes = {};
export default KeyboardButton;

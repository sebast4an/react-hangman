import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './Keyboard.styles';
import KeyboardButton from 'components/atoms/KeyboardButton/KeyboardButton';

const quertyKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const Keyboard = ({ quessWord, handleButtons }) =>
  quertyKeyboard.map(keyboard => (
    <Buttons key={keyboard}>
      {keyboard.map(keyValue => (
        <KeyboardButton quessWord={quessWord} key={keyValue} onClick={handleButtons}>
          {keyValue}
        </KeyboardButton>
      ))}
    </Buttons>
  ));

Keyboard.propTypes = {
  quessWord: PropTypes.string,
  handleButtons: PropTypes.func,
};
export default Keyboard;

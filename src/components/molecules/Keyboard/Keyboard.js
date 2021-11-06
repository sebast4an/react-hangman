import React from 'react';
import { Buttons } from './Keyboard.styles';
import KeyboardButton from 'components/atoms/KeyboardButton/KeyboardButton';

const quertyKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const Keyboard = ({ quessWord, handleButtons }) =>
  quertyKeyboard.map((keyboard, index) => (
    <Buttons key={index}>
      {keyboard.map(keyValue => (
        <KeyboardButton quessWord={quessWord} key={keyValue} handleButtons={handleButtons}>
          {keyValue}
        </KeyboardButton>
      ))}
    </Buttons>
  ));

export default Keyboard;

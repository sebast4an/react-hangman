import React from 'react';
import { Buttons, Button } from './Keyboard.styles';

const quertyKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const Keyboard = () =>
  quertyKeyboard.map((keyboard, index) => (
    <Buttons key={index}>
      {keyboard.map(keyValue => (
        <Button key={keyValue}>{keyValue}</Button>
      ))}
    </Buttons>
  ));

export default Keyboard;

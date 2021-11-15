import React, { useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './Keyboard.styles';
import KeyboardButton from 'components/atoms/KeyboardButton/KeyboardButton';
import { GameContext } from 'providers/GameProvider';
import { saveInLocalStorage, loadFromLocalStorage } from 'helpers/localStorage';

const quertyKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const Keyboard = () => {
  const { handleButtons } = useContext(GameContext);
  const [disabledButton, setDisabledButton] = useState([]);

  const checkButtonsInLocalStorage = () => {
    const data = loadFromLocalStorage('disabledButtons');

    if (data) {
      setDisabledButton(data);
      console.log(data);
    }
  };

  //TODO: make listener for cliked buttons and add attrivbute 'disabled' for localStorage!
  const checking = (key, state) => {
    console.log(state.indexOf(key));
    if (state.indexOf(key) > -1) {
      return 'disabled';
    } else return null;
  };

  useEffect(() => {
    checkButtonsInLocalStorage();
  }, []);

  const handleDisabledButtons = e => {
    if (e.target.hasAttribute('disabled')) setDisabledButton(prevState => [...prevState, e.target.innerText]);
  };

  useEffect(() => {
    saveInLocalStorage('disabledButtons', disabledButton);
  }, [disabledButton]);

  return quertyKeyboard.map(keyboard => (
    <Buttons key={keyboard}>
      {keyboard.map(keyValue => (
        <KeyboardButton
          key={keyValue}
          onClick={e => {
            handleButtons(e);
            handleDisabledButtons(e);
          }}
        >
          {keyValue}
        </KeyboardButton>
      ))}
    </Buttons>
  ));
};

Keyboard.propTypes = {
  quessWord: PropTypes.string,
  handleButtons: PropTypes.func,
};
export default Keyboard;

import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './Keyboard.styles';
import KeyboardButton from 'components/atoms/KeyboardButton/KeyboardButton';
import { GameContext } from 'providers/GameProvider';
import { saveInLocalStorage, loadFromLocalStorage } from 'helpers/localStorage';

const initialState = [];

const quertyKeyboard = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const Keyboard = () => {
  const { handleClikedButtons, gameState } = useContext(GameContext);
  const [disabledButtons, setDisabledButtons] = useState(initialState);

  const checkButtonsInLocalStorage = () => {
    const data = loadFromLocalStorage('disabledButtons');

    if (data) setDisabledButtons(data);
    else setDisabledButtons(initialState);
  };

  const handleDisabledButtons = e => {
    const button = e.target;
    const buttonValue = button.innerText.toLowerCase();

    if (button.hasAttribute('disabled')) setDisabledButtons(prevState => [...prevState, buttonValue]);
  };

  const isButtonDisabled = (state, checkedValue) => (state.indexOf(checkedValue) > -1 ? true : false);

  useEffect(() => {
    checkButtonsInLocalStorage();
  }, []);

  useEffect(() => {
    if (gameState.moves === 0) {
      checkButtonsInLocalStorage();
    }
  }, [gameState]);

  useEffect(() => {
    saveInLocalStorage('disabledButtons', disabledButtons);
  }, [disabledButtons]);

  return quertyKeyboard.map((keyboard, index) => (
    <Buttons key={keyboard} className={`buttonsgroup${index}`}>
      {keyboard.map(keyValue => (
        <KeyboardButton
          disabled={isButtonDisabled(disabledButtons, keyValue)}
          key={keyValue}
          onClick={e => {
            handleClikedButtons(e);
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
  handleClikedButtons: PropTypes.func,
};
export default Keyboard;

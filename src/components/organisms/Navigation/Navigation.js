import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Nav, Header, HamburgerButton, List, ListElement } from './Navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Header>
        <h1>Hangman Game</h1>
      </Header>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}>
        <div className={'open'} />
        <div className={'close'} />
      </HamburgerButton>
      {isOpen ? (
        <List>
          <ListElement>
            <a> New game </a>
          </ListElement>
          <ListElement>
            <a> About project </a>
          </ListElement>
          <ListElement>
            <a> Repository </a>
          </ListElement>
        </List>
      ) : null}
    </Nav>
  );
};
// Navigation.propTypes = {};
export default Navigation;

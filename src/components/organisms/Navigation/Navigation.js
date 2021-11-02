import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Nav, Header, HamburgerButton, List, ListElement, StyledLink } from './Navigation.styles';

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
            <StyledLink to="/game"> Start game </StyledLink>
          </ListElement>
          <ListElement>
            <StyledLink to="/"> About project </StyledLink>
          </ListElement>
          <ListElement>
            <StyledLink to="/"> Repository </StyledLink>
          </ListElement>
        </List>
      ) : null}
    </Nav>
  );
};
// Navigation.propTypes = {};
export default Navigation;

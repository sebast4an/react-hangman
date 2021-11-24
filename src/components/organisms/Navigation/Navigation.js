import React, { useState } from 'react';
import { ClassicLink } from 'components/atoms/ClassicLink/ClassicLink';
import { Wrapper, Nav, Header, HamburgerButton, List, ListElement, StyledLink } from './Navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeNavState = () => setIsOpen(prevState => !prevState);

  const viewNav = isOpen => {
    return isOpen ? (
      <List>
        <ListElement>
          <StyledLink to="/" activeClassName="active-link" exact onClick={changeNavState}>
            Home Page
          </StyledLink>
        </ListElement>
        <ListElement>
          <StyledLink to="/game" activeClassName="active-link" onClick={changeNavState}>
            Start game
          </StyledLink>
        </ListElement>
        <ListElement>
          <ClassicLink onClick={changeNavState} href="https://github.com/sebast4an/react-hangman" target="_blank" rel="noreferrer noopener">
            Repository
          </ClassicLink>
        </ListElement>
      </List>
    ) : null;
  };

  return (
    <Wrapper>
      <Nav>
        <Header>
          <h1>Hangman Game</h1>
        </Header>
        <HamburgerButton isOpen={isOpen} onClick={changeNavState}>
          <div className={'open'} />
          <div className={'close'} />
        </HamburgerButton>
        {viewNav(isOpen)}
      </Nav>
    </Wrapper>
  );
};

export default Navigation;

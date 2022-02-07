import React, { useState } from 'react';
import { ClassicLink } from 'components/atoms/ClassicLink/ClassicLink';
import { Link } from 'react-router-dom';
import { Wrapper, Nav, Header, HamburgerButton, List, ListElement, StyledLink } from './Navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeNavState = () => setIsOpen(prevState => !prevState);

  const list = (
    <List>
      <ListElement>
        <StyledLink to={process.env.REACT_APP_PUBLIC_URL + '/'} exact="true" onClick={changeNavState}>
          Home Page
        </StyledLink>
      </ListElement>
      <ListElement>
        <StyledLink to={process.env.REACT_APP_PUBLIC_URL + '/game'} onClick={changeNavState}>
          Start game
        </StyledLink>
      </ListElement>
      <ListElement>
        <ClassicLink onClick={changeNavState} href="https://github.com/sebast4an/react-hangman" target="_blank" rel="noreferrer noopener">
          Repository
        </ClassicLink>
      </ListElement>
    </List>
  );

  const viewNav = isOpen => {
    if (window.innerWidth > 720) {
      return list;
    } else {
      return isOpen ? list : null;
    }
  };

  return (
    <Wrapper>
      <Nav>
        <Header>
          <h1>
            <Link to={process.env.REACT_APP_PUBLIC_URL + '/'}>Hangman Game</Link>
          </h1>
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

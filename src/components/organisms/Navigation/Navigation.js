/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  width: 95%;
  margin: 10px auto 0 auto;
  border-radius: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Header = styled.header`
  margin: 0 0.7rem;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 350px) {
    margin: 0 1rem;
  }
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  border: 0;
  margin: 0 0.7rem;

  div {
    height: 2px;
    width: 25px;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;

    &::before,
    &::after {
      position: absolute;
      left: 0;
      content: '';
      height: 2px;
      width: 25px;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &::before {
      top: 6px;
    }

    &::after {
      top: -6px;
    }
  }

  @media (min-width: 350px) {
    margin: 0 1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: none;
`;

const ListElement = styled.li`
  padding: 0.5rem;
  margin: 0;
`;

const Navigation = () => (
  <Nav>
    <Header>
      <h1>Hangman Game</h1>
    </Header>
    <HamburgerButton>
      <div></div>
    </HamburgerButton>
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
  </Nav>
);
// Navigation.propTypes = {};
export default Navigation;

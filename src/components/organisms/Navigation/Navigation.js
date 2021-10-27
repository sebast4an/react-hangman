import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  margin: 0;
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const Navigation = () => (
  <Nav>
    <header>
      <h1>Hangman</h1>
    </header>
    <ul>
      <li>
        <a href="#"> New game </a>
      </li>
      <li>
        <a href="#"> Abouth project </a>
      </li>
      <li>
        <a href=""> Repository </a>
      </li>
    </ul>
  </Nav>
);
Navigation.propTypes = {};
export default Navigation;

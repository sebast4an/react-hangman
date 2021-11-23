import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Nav = styled.nav`
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
  box-shadow: 0px 2px 24px 1px ${({ theme }) => theme.colors.darkBlue};
`;

export const Header = styled.header`
  margin: 0 0.7rem;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 350px) {
    margin: 0 1rem;
  }
`;

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  margin: 0 0.7rem;
  height: 35px;
  border-radius: 10px;
  transition: border 0.3s ease;
  z-index: 10;
  overflow: hidden;

  .open {
    height: 2px;
    width: 25px;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ isOpen }) => (isOpen ? '40px' : '0')});

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

  .close {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-35px')});

    &::after,
    &::before {
      position: absolute;
      inset: -2px 0 0 0;
      content: '';
      height: 3px;
      width: 25px;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const List = styled.ul`
  @keyframes opacityAnimate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.95);
  width: 100vw;
  height: 100vh;
  animation: opacityAnimate 0.5s ease-in-out;
`;

export const ListElement = styled.li`
  padding: 2rem 1rem;
  margin: 0 1rem 0 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};

  &.active-link {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 10px;
  }
`;

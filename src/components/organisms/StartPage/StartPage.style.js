import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  margin: 30px 0;
  width: max-content;
  padding: 1rem;
  border-radius: 10px;
  transition: background 0.3s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.grey};
  }
`;


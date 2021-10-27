import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const MainTemplate = ({ children }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

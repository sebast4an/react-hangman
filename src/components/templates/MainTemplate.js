import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

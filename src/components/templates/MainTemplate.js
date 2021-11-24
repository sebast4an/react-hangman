import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-flow: column nowrap;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;

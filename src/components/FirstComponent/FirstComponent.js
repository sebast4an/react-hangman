import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.big};
`;

const FirstComponent = () => <Title>Works!😺</Title>;

FirstComponent.propTypes = {};
export default FirstComponent;

import React from 'react';
import styled from 'styled-components';

const words = ['sebastian', 'github', 'javascript'];

const generateWord = wordsArray => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const number = random(0, wordsArray.length - 1);
  const generatedWord = wordsArray[number];

  const quessArray = [...generatedWord];

  console.log(quessArray, quessArray.length);
};

const Word = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 5px;
  text-align: center;
`;

const Words = () => <Word>{generateWord(words)}</Word>;

export default Words;

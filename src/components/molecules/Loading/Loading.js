import React from 'react';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Wrapper, LoadingSection, LoadingElement } from './Loading.styles';

const Loading = () => (
  <Wrapper>
    <LoadingSection>
      <LoadingElement />
      <LoadingElement />
      <LoadingElement />
      <LoadingElement />
    </LoadingSection>
    <Paragraph>Loading, please wait 🚀...</Paragraph>
  </Wrapper>
);

export default Loading;

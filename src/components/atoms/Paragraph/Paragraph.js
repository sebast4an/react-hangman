import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.8;
`;

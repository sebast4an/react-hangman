import React from 'react';
import styled from 'styled-components';
import { ClassicLink } from 'components/atoms/ClassicLink/ClassicLink';
import { ReactComponent as SVG } from 'assets/svg/footer.svg';
import { ReactComponent as GitHubSVG } from 'assets/svg/github.svg';

export const StyledFooter = styled.footer`
  padding: 2rem 0.5rem;
  margin: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-content: center;
`;

export const SVGWaves = styled(SVG)`
  flex-grow: 1;
  transform: rotate(180deg);
  min-height: 100px;
  max-width: 100%;
`;

export const Author = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 0 0 1rem;
  font-size: 0.8rem;
`;

export const GitHubIcon = styled(GitHubSVG)`
  width: 24px;
  height: 24px;
  margin: 0 1rem 0 0;

  rect {
    fill: ${({ theme }) => theme.colors.lightBlack};
  }

  path {
    fill: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Footer = () => {
  return (
    <>
      <SVGWaves />
      <StyledFooter>
        <Author>Created by: 👨‍💻 Sebastian Szczypiński</Author>
        <ClassicLink
          href="https://github.com/sebast4an/react-hangman"
          target="_blank"
          rel="noreferrer noopener"
          title="Go to GitHub Repository"
          aria-label="Go to GitHub Repository"
          isColor={({ theme }) => theme.colors.lightGrey}
        >
          <GitHubIcon aria-hidden="true" />
        </ClassicLink>
      </StyledFooter>
    </>
  );
};

export default Footer;

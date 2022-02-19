import { css } from 'styled-components';
import text from './text';
import colors from './colors';

const { font, size, weight } = text;
const { primary, secondary } = colors;

const typography = css`
  font-family: ${font.body};
  font-weight: ${weight.regular};
  font-size: ${size.body.mobile.regular}px;

  p,
  input {
    font-family: ${font.body};
    font-weight: ${weight.regular};
    font-size: ${size.body.mobile.regular}px;
  }

  a {
    font-weight: ${weight.medium};
    text-decoration: underline;
    color: ${primary.linkColor};

    &:hover {
      font-weight: ${weight.bold};
      color: ${primary.hoverColor};
    }
    &:active {
      color: ${primary.activeLinkColor};
    }
    .activeLink ${font.heading.h5} {
      color: ${primary.activeLinkColor};
    }
    .activeLink ${font.heading.h3} {
      color: ${primary.activeLinkColor};
    }
  }

  h1 {
    font-family: ${text.font.heading.h1};
    font-size: ${size.heading.mobile.h1}px;
    color: ${secondary.secondaryColor};
    text-shadow: ${secondary.secondaryColorTextShadow};
    max-width: 90vw;
    margin: 1.5rem auto;
  }

  h2 {
    font-weight: ${weight.medium};
    font-size: ${size.heading.mobile.h2}px;
    text-decoration: underline;
    color: ${primary.headerBodyTextColor};
  }
  h3 {
    font-size: ${size.heading.mobile.h3}px;
    font-weight: ${weight.regular};
    color: ${primary.primaryColor};
    text-shadow: ${primary.primaryColorTextShadow};
  }
  h4 {
    font-weight: ${weight.semiBold};
    font-size: ${size.heading.mobile.h4}px;
    color: ${secondary.secondaryColor};
  }
  h5 {
    font-weight: ${weight.medium};
    font-size: ${size.heading.mobile.h5}px;
    text-decoration: underline;
    color: ${primary.linkColor};
    text-shadow: ${secondary.secondaryColorTextShadow};
  }
  h6 {
    font-weight: ${weight.semiBold};
    font-size: ${size.heading.mobile.h6}px;
    color: ${secondary.secondaryColor};
    text-transform: uppercase;
  }

  @media (min-width: 850px) {
    font-size: ${size.body.desktop.regular}px;
    p,
    input {
      font-size: ${size.body.desktop.regular}px;
    }

    h1 {
      font-size: ${size.heading.desktop.h1}px;
    }

    h2 {
      font-size: ${size.heading.desktop.h2}px;
    }
    h3 {
      font-size: ${size.heading.desktop.h3}px;
    }
    h4 {
      font-size: ${size.heading.desktop.h4}px;
    }
    h5 {
      font-size: ${size.heading.desktop.h5}px;
    }
    h6 {
      font-size: ${size.heading.desktop.h6}px;
    }
  }
`;

export default typography;

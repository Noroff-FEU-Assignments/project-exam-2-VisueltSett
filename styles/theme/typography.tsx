import { css } from 'styled-components';
import font from './font';
import colors from './colors';

const { style, size, weight } = font;
const { primary, secondary } = colors;

const typography = css`
  font-family: ${style.body};
  font-weight: ${weight.regular};
  font-size: ${size.body.mobile.regular}px;

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
  }

  h1 {
    font-family: ${style.heading};
    font-size: ${size.heading.mobile.h1}px;
    color: ${secondary.secondaryColor};
    text-shadow: ${secondary.secondaryColorTextShadow};
  }

  h2 {
    font-weight: ${weight.semiBold};
    font-size: ${size.heading.mobile.h2}px;
    text-decoration: underline;
    color: ${primary.headerBodyTextColor};
  }
  h3 {
    font-size: ${size.heading.mobile.h3}px;
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
    color: ${primary.iconColor};
    text-shadow: ${secondary.secondaryColorTextShadow};
  }
  h6 {
    font-weight: ${weight.semiBold};
    font-size: ${size.heading.mobile.h6}px;
    color: ${secondary.secondaryColor};
    text-transform: uppercase;
  }
`;

export default typography;

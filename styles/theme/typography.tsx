import { css } from 'styled-components';
import font from './font';
const { style, size, weight } = font;
const typography = css`
  font-family: ${style.body};
  font-weight: ${weight.regular};
  font-size: ${size.body.mobile.regular}px;

  a {
    font-weight: ${weight.semiBold};
    text-decoration: underline;
  }

  h1 {
    font-family: ${style.heading};
    font-size: ${size.heading.mobile.h1}px;
  }

  h2 {
    font-size: ${size.heading.mobile.h2}px;
    text-decoration: underline;
  }
  h3 {
    font-size: ${size.heading.mobile.h3}px;
    text-transform: uppercase;
  }
`;
export default typography;

/* lineHeight*/

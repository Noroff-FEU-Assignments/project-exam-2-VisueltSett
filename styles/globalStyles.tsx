import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
  }
  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }

 #root{
        margin:0 auto;
    }
/*
$osebro-antikvariat-black: rgba(28, 34, 38, 1);
$osebro-antikvariat-white: rgba(242, 242, 242, 1);
$osebro-antikvariat-green: rgba(130, 255, 151, 1);
$osebro-antikvariat-lightblue: rgba(171, 237, 253, 1);
$osebro-antikvariat-blue: rgba(42, 51, 112, 1);
*/

html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}


`;

export default GlobalStyles;

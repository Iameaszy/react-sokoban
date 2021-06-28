import { createGlobalStyle } from 'styled-components';
import { StyledReset } from './StyledReset';

export const GlobalStyles = createGlobalStyle`
  ${StyledReset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }
`;

export default GlobalStyles;

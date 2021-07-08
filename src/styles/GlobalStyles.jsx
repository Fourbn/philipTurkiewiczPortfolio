import { createGlobalStyle } from "styled-components";

import FontBold from "../fonts/SpaceGrotesk-Bold.woff2";
import FontBoldBackup from "../fonts/SpaceGrotesk-Bold.woff";

import FontRegular from "../fonts/SpaceGrotesk-Regular.woff2";
import FontRegularBackup from "../fonts/SpaceGrotesk-Regular.woff";

const GlobalStyles = createGlobalStyle`
// ========= GLOBAL VARIABLES =============== //
  :root {
    --background: #140E1A;
    --white: #fff;
    --grey: #303436;

    --transBlue: #5BCEFA;
    --genderQueerPurple: #B57EDC;
    --transPink: #F5A9B8;
    --nonBinaryGold: #F4D06F;
    --agenderGreen: #A2FAA3;
    --straightBlue: #0868AC;

    --breakDesktop: 1200px;
    --breakTablet: 768px;
    --breakMobile: 375px;
  }
// ========================================== //

// ======== STRIPPING STYLES ================ //
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li,
  a {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
// =========================================== //

// =========== FONTS & TYPOGRAPHY ============ //
  @font-face {
    font-family: 'Space Grotesk';
    src: url(${FontRegular}),
          url(${FontRegularBackup});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url(${FontBold}),
          url(${FontBoldBackup});
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  .subheading,
  .tab {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
  }

  h1 {
    font-size: 5.2rem;
  }

  h2,
  h4,
  .subheading,
  .tab {
    font-size: 1.6rem;
    letter-spacing: 3px;
    line-height: 2;
    text-transform: uppercase;
  }

  h3 {
    font-size: 4.4rem;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
  }
// =========================================== //

// =========== GLOBAL STYLES ================= //
  body {
    background-color: var(--background);
    color: var(--white);
  }

  .wrapper {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;

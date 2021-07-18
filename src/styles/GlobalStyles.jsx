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
    @media (min-width: 375px) {
      font-size: 6.4rem;
    }
    @media (min-width: 768px) {
      font-size: 13.6rem;
    }
    @media (min-width: 1200px) {
      font-size: 19.2rem;
    }
  }

  h2,
  .skills,
  .subheading,
  .surheading,
  .tab {
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 3px;
    line-height: 2;
    text-transform: uppercase;
    @media (min-width: 375px) {
      font-size: 2rem;
    }
    @media (min-width: 1200px) {
      font-size: 2.4rem;
    }
  }

  h3,
  .visualHeading {
    font-size: 4.4rem;
    font-weight: 700;
    letter-spacing: 2px;
    @media (min-width: 375px) {
      font-size: 4.8rem;
    }
    @media (min-width: 1200px) {
      font-size: 6.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    @media (min-width: 375px) {
      font-size: 1.6rem;
    }
  }
// =========================================== //

// =========== GLOBAL STYLES ================= //
  body {
    background-color: var(--background);
    color: var(--white);
  }

  .wrapper {
    max-width: 1200px;
  }
  
  .grid-wrapper {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 5% repeat(auto-fit, minmax(65px, 1fr)) 5%;
    grid-column-gap: 30px;
  }

  .button {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 3px;
    line-height: normal;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    padding: 13px 25px;
    border: 2px solid var(--white);
    border-radius: 1px;
    transition: background-color .3s, color .3s, transform .3s;

    &:hover,
    &:focus {
      color: inherit;
      border: 2px solid;
      border-color: inherit;
      transform: scaleX(1.07);
      transition: border .3s, color .3s, transform .3s;
    }
  }

  .turkeyLogo {
    width: 100px;
  }
// =========================================== //

// ============== ANIMATIONS ================= //

  @keyframes fading-in {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		@keyframes fading-out {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
`;

export default GlobalStyles;

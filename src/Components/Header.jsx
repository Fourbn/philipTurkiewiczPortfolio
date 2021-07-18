import React from 'react';
import styled from 'styled-components';

import TurkeyLogo from './SVG/TurkeyLogo';
import GetInTouchIcon from './SVG/GetInTouchIcon';

const HeaderStyles = styled.header`
  min-height: 8vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 7px;

  nav ul {
    display: flex;
    justify-content: space-between;

    li {
      width: 100px;
      padding: 10px;
      display: flex;
      align-items: center;

      svg {
        width: 100%;
      }
    }
  }

	.getInTouch {
		width: 100px;
		a {
			padding: 5px;
			width: 100%;
			transform: rotate(-30deg);
			transition: transform 1s;
			&:hover,
			&focus {
				transform: rotate(182deg);
				transition: transform 1s;
			}
		}
	}
`;

const Header = () => {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <li className="turkeyLogo">
            <TurkeyLogo />
          </li>
          <li className="getInTouch">
            <a
              href="#contact"
              aria-label="Click here to scroll directly to the Contact Me section"
            >
              <GetInTouchIcon />
            </a>
          </li>
        </ul>
      </nav>
		</HeaderStyles>
	);
}

export default Header;

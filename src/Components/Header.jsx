import React from 'react';
import styled from 'styled-components';

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
      padding: 10px;
      display: flex;
      align-items: center;
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
          <li class="turkeyLogo">
            <img
              src="./assets/icons/code-turkey.svg"
              alt="Turkey logo made of brackets and underscores."
            />
          </li>
          <li class="getInTouch">
            <a
              href="#contact"
              aria-label="Click here to scroll directly to the Contact Me section"
            >
              <img
                src="./assets/icons/get-in-touch.svg"
                alt="Circle of text saying Get In Touch"
              />
            </a>
          </li>
        </ul>
      </nav>
		</HeaderStyles>
	);
}

export default Header;

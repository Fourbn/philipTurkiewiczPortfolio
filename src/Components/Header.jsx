import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
	min-height: 100vh;

	nav {
		margin: 2rem 0;
		ul {
			display: flex;
			justify-content: space-between;

			li {
				padding: 10px;
				display: flex;
				align-items: center;
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

	.headerText {
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			color: var(--background);
			margin: 25px 0 20px 0;
		}

		.developer,
		.debutante,
		.doofus,
		.subheading {
			color: var(--background);
		}

		.transition {
			color: var(--white);
			transition: color 3s;
		}

		.transitionBlue {
			color: var(--transBlue);
			transition: color 3s;
		}

		& p:first-child {
			text-align: center;
		}

		& p:last-child {
			text-align: center;
		}
	}

	.skipToContent {
		width: 65px;
		margin: 0 auto;

		.fa-scroll {
			padding: 10px;
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
			<div class="headerText">
				<p class="subheading">Philip Turkiewicz is...</p>
				<h1>CodeTurkie</h1>
				<p class="subheading">
					<span class="developer">Developer.</span>{" "}
					<span class="debutante">Debugger.</span>{" "}
					<span class="doofus">Debutante.</span>
				</p>
			</div>
			<div class="skipToContent">
				<img
					src="./assets/icons/scroll-icon.svg"
					alt="Purple scroll with arrow below it pointing down to indicate there is more content on the website."
				/>
			</div>
		</HeaderStyles>
	);
};

export default Header;

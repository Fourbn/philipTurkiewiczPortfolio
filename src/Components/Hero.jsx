import React from "react";
import styled from "styled-components";

const HeroStyles = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: var(--transBlue);
		margin: 25px 0 20px 0;
		animation: fading-in 3s;
	}

	.developer,
	.debugger,
	.debutante,
	.subheading {
		animation: fading-in 3s;
	}

	& p:first-child {
		text-align: center;
	}

	& p:last-child {
		text-align: center;
	}

	.skipToContent {
		width: 65px;
		position: relative;
		top: 100px;
	}
`;

const Hero = () => {
	return (
		<HeroStyles>
			<p class="subheading">Philip Turkiewicz is...</p>
			<h1>CodeTurkie</h1>
			<p class="subheading">
				<span class="developer">Developer.</span>{" "}
				<span class="debugger">Debugger.</span>{" "}
				<span class="debutante">Debutante.</span>
			</p>
			<div class="skipToContent">
				<img
					src="./assets/icons/scroll-icon.svg"
					alt="Purple scroll with arrow below it pointing down to indicate there is more content on the website."
				/>
			</div>
		</HeroStyles>
	);
};

export default Hero;

import React from "react";
import styled from "styled-components";

import ScrollIcon from './SVG/ScrollIcon';

const HeroStyles = styled.section`
	min-height: 100vh;
	margin: 4rem auto;
	justify-content: center;
	align-content: center;

	h1 {
		color: var(--transBlue);
		margin: 25px 0 20px 0;
		animation: fading-in 3s;
		grid-column: 2 / -2;
	}

	.subheading,
	.surheading {
		grid-column: 2 / -2;
		text-align: center;
	}

	.developer,
	.debugger,
	.debutante,
	.surheading {
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
		grid-column: 2 / -2;
		margin: 4rem auto 0;
	}
`;

const Hero = () => {
	return (
		<HeroStyles className="grid-wrapper">
			<p className="subheading">Philip Turkiewicz is...</p>
			<h1>CodeTurkie</h1>
			<p className="surheading">
				<span className="developer">Developer.</span>{" "}
				<span className="debugger">Debugger.</span>{" "}
				<span className="debutante">Debutante.</span>
			</p>
			<div className="skipToContent">
				<ScrollIcon />
			</div>
		</HeroStyles>
	);
};

export default Hero;

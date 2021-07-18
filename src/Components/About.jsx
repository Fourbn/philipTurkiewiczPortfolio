import React from "react";
import styled from "styled-components";

import HtmlLogo from '../Components/SVG/HtmlLogo';
import CssLogo from '../Components/SVG/CssLogo';
import JavascriptLogo from '../Components/SVG/JavascriptLogo';
import JqueryLogo from '../Components/SVG/JqueryLogo';
import ReactLogo from '../Components/SVG/ReactLogo';
import FirebaseLogo from '../Components/SVG/FirebaseLogo';

import HeadshotGif from '../images/phil-gradient-photo.gif';

const AboutStyles = styled.section`
	min-height: 100vh;

	.headshotContainer {
		grid-column: 1 / -1;
		margin: 0 auto;
	}

	.aboutInfo {
		grid-column: 1 / -1;

		h2 {
			padding-left: 3px;
			margin-bottom: -5px;
		}

		.visualHeading {
			color: var(--nonBinaryGold);
			margin: 5px 0;
		}

		& > p {
			margin: 20px 0;
		}

		.button {
			// with a new button hover, should change the margin-left 5px back to 0 for better alignment
			margin: 25px 5px 55px 5px;
			&:hover {
				color: var(--nonBinaryGold);
			}
		}
	}

	.skillsBox {
		grid-column: 1 / -1;
		width: 90%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
		grid-gap: 1fr;

		h4 {
			font-size: 1.8rem;
			padding-left: 8px;
			width: 100%;
			grid-column: 1 / -1;
		}

		.skill {
			justify-self: flex-start;
			align-self: center;
			height: 100%;
			margin: 3px;
			padding-left: 8px;
			transition: transform 0.3s;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			&:hover {
				transform: scale(1.2);
				transition: transform 0.3s;
			}

			svg {
				margin: 0 auto;
			}
		}

		p {
			font-size: 1.2rem;
			text-align: center;
			margin: 7px 0;
		}

		.html svg,
		.css svg,
		.javascript svg {
			width: 60px;
		}

		.jquery svg,
		.react svg,
		.firebase svg {
			width: 70px;
		}

		.javascript svg,
		.react svg {
			padding-bottom: 3px;
		}

		.firebase svg {
			margin-bottom: -15px;
		}
	}

	@media (min-width: 768px) {
		.headshotContainer {
			grid-column: 1 / span 6;
		}
		.aboutInfo,
		.skills,
		.skillsBox {
			grid-column: span 6 / -1;
		}
	}
`;

const About = () => {
	return (
		<AboutStyles className="grid-wrapper">
			<div className="headshotContainer">
				<img
					src={HeadshotGif}
					alt="Headshot of Philip. They have short curly brown hair, blue framed glasses, and they are wearing a black and purple plaid flannel. They look very sofisticated."
				/>
			</div>
			<div className="aboutInfo">
				<h2>About me</h2>
				<p className="visualHeading">Hey, I'm Philip!</p>
				<p>
					Oh my goodness, hello! I am a Front-End developer based in Toronto,
					Canada. I love long walks on the beach, writing clean code, and
					pushing my skills to the limit. My interests include joining an
					exciting team of passionate people, personal growth, and making silly
					faces.
				</p>
				<p>
					I used to coordinate public events in this city. Some people might be
					nervous to leave the exciting on-the-job learning and fulfilling
					teamwork dynamic behind. Personally, I'm excited to join the boring,
					simple, and rarely-evolving world of tech.
				</p>
				<p>
					Other than coding, I love complimenting my Animal Crossing villagers,
					baking cookies, and making people laugh.
				</p>
				<a
					href="./assets/philip-turkiewicz-resume.pdf"
					target="_blank"
					rel="noopener"
					className="button"
				>
					View Résumé
				</a>
			</div>
			<h3 className="skills">Skills</h3>
			<ul className="skillsBox">
				<li className="skill html">
					<HtmlLogo />
					<p>HTML 5</p>
				</li>
				<li className="skill css">
					<CssLogo />
					<p>CSS 3</p>
				</li>
				<li className="skill javascript">
					<JavascriptLogo />
					<p>JavaScript</p>
				</li>
				<li className="skill jquery">
					<JqueryLogo />
					<p>jQuery</p>
				</li>
				<li className="skill react">
					<ReactLogo />
					<p>React</p>
				</li>
				<li className="skill firebase">
					<FirebaseLogo />
					<p>Firebase</p>
				</li>
			</ul>
		</AboutStyles>
	);
};

export default About;

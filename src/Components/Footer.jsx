import React from "react";
import {
	FaHeart,
	FaPalette,
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";
import TurkeyLogo from "./SVG/TurkeyLogo";

const FooterStyles = styled.footer`
	border-top: 1px solid var(--grey);
	padding: 4rem 0;

	.footerNav {
		margin: 0;
		justify-self: center;
		grid-column: 2 / -2;
		ul {
			display: flex;
			justify-content: center;
			@media (min-width: 1200px) {
				justify-content: flex-end;
			}
		}
		li {
			font-size: 1rem;
			margin: 0 5px;
			padding: 0;
		}
	}

	.credits {
		text-align: center;
		width: 100%;
		padding: 35px 0;
		grid-column: 2 / -2;
		p:first-of-type {
			margin-bottom: 4px;
		}
		a {
			transition: color 0.3s;
		}
		a:hover,
		a:focus {
			color: var(--agenderGreen);
		}

		.creditIcon {
			display: inline-block;
			position: relative;
			top: -1px;
			margin: 0 3px;
			font-size: 1.4rem;
			&.heart {
				color: var(--transPink);
			}
			&.palette {
				color: var(--agenderGreen);
			}
		}
	}

	.socialLink {
		padding: 1rem;
		.socialIcon {
			font-size: 2rem;
			transition: transform 0.3s, color 0.3s;
		}
		&:hover .socialIcon,
		&:focus .socialIcon {
			transform: scale(1.6);
			transition: transform 0.3s, color 0.3s;
		}
		&.github:hover,
		&.github.focus {
			color: var(--transPink);
		}
		&.linkedin:hover,
		&.linkedin:focus {
			color: var(--nonBinaryGold);
		}
		&.twitter:hover,
		&.twitter:focus {
			color: var(--transBlue);
		}
	}

	.turkeyLogo {
		grid-column: 2 / -2;
		justify-self: center;
	}

	@media (min-width: 1200px) {
		.turkeyLogo,
		.credits,
		.footerNav {
			align-self: center;
		}
		.turkeyLogo {
			grid-column: 1 / span 3;
			justify-self: start;
		}
		.credits {
			grid-column: 6 / 9;
		}
		.footerNav {
			grid-column: span 3 / -1;
			justify-self: end;
		}
	}
`;

const Footer = () => {
	return (
		<FooterStyles className="grid-wrapper">
			<div className="turkeyLogo">
				<TurkeyLogo />
			</div>
			<div className="credits">
				<p>
					Made with <FaHeart className="creditIcon heart" /> by Philip
					Turkiewicz
				</p>
				<p>
					Designed with <FaPalette className="creditIcon palette" /> by{" "}
					<a
						href="https://aaronvince.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Aaron Vince
					</a>
				</p>
			</div>
			<nav className="footerNav">
				<ul>
					<li>
						<a
							href="https://github.com/Fourbn"
							target="_blank"
							rel="noopener noreferrer"
							className="socialLink github"
						>
							<FaGithub className="socialIcon github" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/philip-turkiewicz-12035884/"
							target="_blank"
							rel="noopener noreferrer"
							className="socialLink linkedin"
						>
							<FaLinkedinIn className="socialIcon linkedin" />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/fourbn_task"
							target="_blank"
							rel="noopener noreferrer"
							className="socialLink twitter"
						>
							<FaTwitter className="socialIcon twitter" />
						</a>
					</li>
				</ul>
			</nav>
		</FooterStyles>
	);
};

export default Footer;

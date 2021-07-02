import React from "react";
import {
	FaHeart,
	FaPalette,
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";

const FooterStyles = styled.footer`
	footer {
		border-top: 1px solid --white;
		padding: 40px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.footer-nav {
		margin: 0;
		width: 100%;
	}

	.footer-nav ul {
		display: flex;
		justify-content: center;
	}

	.footer-nav li {
		font-size: 1rem;
		margin: 0 5px;
		padding: 0;
	}

	.social-link {
		padding: 1rem;
		transition: transform 0.3s, color 0.3s;
	}
	.social-link:hover,
	.social-link:focus {
		transform: scale(1.6);
		transition: transform 0.3s, color 0.3s;
	}
	.github:hover,
	.social-link.github:focus {
		color: --transPink;
	}
	.linkedin:hover,
	.social-link.linkedin:focus {
		color: --nonBinaryGold;
	}
	.twitter:hover,
	.social-link.twitter:focus {
		color: --transBlue;
	}

	.credits {
		text-align: center;
		width: 100%;
		padding: 35px 0;
	}
	.credits p svg {
		display: inline-block;
		position: relative;
		top: -1px;
		padding: 3px;
		font-size: 0.7rem;
	}
	.credits p:first-of-type svg {
		color: --transPink;
	}
	.credits p:last-of-type svg {
		color: --agenderGreen;
	}

	.credits p a:hover,
	.credits p a:focus {
		color: --agenderGreen;
	}
`;

const Footer = () => {
	return (
		<FooterStyles>
			<div class="turkeyLogo">
				<img
					src="./assets/icons/code-turkey.svg"
					alt="Turkey logo made of brackets and underscores."
				/>
			</div>
			<div class="credits">
				<p>
					Made with <FaHeart /> by Philip Turkiewicz
				</p>
				<p>
					Designed with <FaPalette /> by{" "}
					<a
						href="https://aaronvince.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Aaron Vince
					</a>
				</p>
			</div>
			<nav class="footer-nav">
				<ul>
					<li className="nav-item">
						<a
							href="https://github.com/Fourbn"
							target="_blank"
							rel="noopener noreferrer"
							class="social-link github"
						>
							<FaGithub />
						</a>
					</li>
					<li className="nav-item">
						<a
							href="https://www.linkedin.com/in/philip-turkiewicz-12035884/"
							target="_blank"
							rel="noopener noreferrer"
							class="social-link linkedin"
						>
							<FaLinkedinIn />
						</a>
					</li>
					<li className="nav-item">
						<a
							href="https://twitter.com/fourbn_task"
							target="_blank"
							rel="noopener noreferrer"
							class="social-link twitter"
						>
							<FaTwitter />
						</a>
					</li>
				</ul>
			</nav>
		</FooterStyles>
	);
};

export default Footer;

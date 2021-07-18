import React from "react";
import styled from "styled-components";

const ProjectCardStyles = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	.imageContainer,
	.textContainer {
		width: 100%;
	}
	.imageContainer {
		@media (min-width: 1200px) {
			width: 55%;
		}
	}

	.textContainer {
		background-color: var(--background);
		padding: 4rem 0;
		position: relative;
    width: 100%;
    @media (min-width: 768px) {
      width: 90%;
    }
		@media (min-width: 1200px) {
			width: 45%;
		}

		&.genderQueerPurple {
			border-top: 6px solid var(--genderQueerPurple);
			color: var(--genderQueerPurple);
		}
		&.transPink {
			border-top: 6px solid var(--transPink);
			color: var(--transPink);
		}
		&.transBlue {
			border-top: 6px solid var(--transBlue);
			color: var(--transBlue);
		}
		&.agenderGreen {
			border-top: 6px solid var(--agenderGreen);
			color: var(--agenderGreen);
		}

		h3 {
			color: inherit;
		}
		.skills,
		.description {
			color: var(--white);
		}

		.description {
			margin: 1.2rem 0 2.1rem;
		}

		.links a:first-of-type {
			margin-right: 3rem;
		}
	}

	.textContainer.even {
		left: 0;
		padding-left: 0;
		@media (min-width: 1200px) {
			left: -6rem;
			padding-left: 6rem;
		}
	}

	.textContainer.odd {
    right: 0;
    padding-right: 0;
    order: 1;
    @media (min-width: 1200px) {
      order: -1;
      right: -6rem;
      padding-right: 6rem;
		}
	}
`;

const ProjectCard = ({ projectContent, order }) => {
  const isEvenCard = order % 2 === 0;
	return (
		<ProjectCardStyles>
			<div
				className={`imageContainer ${projectContent.type} ${
					isEvenCard ? "even" : "odd"
				}`}
			>
				<img
					src={projectContent.image}
					alt={`Screenshot of the ${projectContent.heading} project`}
				/>
			</div>
			<div
				className={`textContainer ${projectContent.type}  ${
					isEvenCard ? "even" : "odd"
				}`}
			>
				<p className="skills">{projectContent.skills}</p>
				<h3>{projectContent.heading}</h3>
				<p
					className="description"
					dangerouslySetInnerHTML={{
						__html: projectContent.description,
					}}
				/>
				<div className="links">
					{projectContent.links.map((link, index) => (
						<a
							key={link}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="button"
						>
							{index === 0 ? "Live Site" : "GitHub Repo"}
						</a>
					))}
				</div>
			</div>
		</ProjectCardStyles>
	);
};

export default ProjectCard;

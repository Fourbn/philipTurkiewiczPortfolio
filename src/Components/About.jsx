import React from "react";

const About = () => {
	return (
		<section class="about">
			<div class="headshotContainer">
				<img
					src="./assets/phil-gradient-photo.gif"
					alt="Headshot of Philip. They have short curly brown hair, blue framed glasses, and they are wearing a black and purple plaid flannel. They look very sofisticated."
				/>
			</div>
			<div class="aboutInfo">
				<h2>About me</h2>
				<h3>Hey, I'm Philip!</h3>
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
					class="button"
				>
					View Résumé
				</a>
			</div>
			<div class="skills-box">
				<h4>Skills</h4>
				<div class="skill html">
					<img
						src="./assets/icons/HTML5_logo_and_wordmark.svg"
						alt="HTML 5 Logo"
					/>
					<p>HTML 5</p>
				</div>
				<div class="skill css">
					<img src="./assets/icons/layer1.svg" alt="CSS 3 Logo" />
					<p>CSS 3</p>
				</div>
				<div class="skill javascript">
					<img
						src="./assets/icons/icons8-javascript.svg"
						alt="Java Script Logo"
					/>
					<p>JavaScript</p>
				</div>
				<div class="skill jquery">
					<img src="./assets/icons/jquery.svg" alt="jQuery Logo" />
					<p>jQuery</p>
				</div>
				<div class="skill react">
					<img src="./assets/icons/React-icon.svg" alt="React Logo" />
					<p>React</p>
				</div>
				<div class="skill firebase">
					<img
						src="./assets/icons/icons8-firebase-96.svg"
						alt="Firebase logo"
					/>
					<p>Firebase</p>
				</div>
			</div>
		</section>
	);
};

export default About;

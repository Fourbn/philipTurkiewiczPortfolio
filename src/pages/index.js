import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</main>
	);
};

export default HomePage;

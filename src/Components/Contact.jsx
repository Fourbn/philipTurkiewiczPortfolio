import React, { useState } from "react";
import styled from "styled-components";

const ContactStyles = styled.section`
	padding: 0 0 20rem;

	h2,
	.visualHeading,
	p,
	button {
		grid-column: 2 / -2;
		text-align: center;
	}

	.visualHeading {
		color: var(--nonBinaryGold);
		display: flex;
		flex-direction: column;
	}

	p {
		margin: 2rem auto 2.4rem;
		grid-column: 4 / -4;
	}

	button {
		background-color: var(--background);
		cursor: pointer;
		justify-self: center;
		margin-top: 1rem;
		&:hover,
		&:focus {
			color: var(--nonBinaryGold);
		}
	}

	.contactForm {
		grid-column: 2 / -2;
		padding: 4rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;
		margin-top: 6rem;
		border: 4px solid var(--nonBinaryGold);
		border-radius: 5px;

		h3 {
			color: var(--nonBinaryGold);
			margin: 2rem 0 5rem;
		}
		.closeFormButton {
			border: none;
			padding: 0;
			font-size: 10rem;
			font-family: "Space Grotesk", sans-serif;
			font-weight: 700;
			color: var(--transBlue);
			background-color: transparent;
			transform: rotate(45deg);
			height: 90px;
			position: absolute;
			top: -28px;
			right: -5px;
			transition: color 0.3s;
			&:hover,
			&:focus {
				color: var(--transPink);
				transition: color 0.3s;
			}
		}

		input,
		textarea {
			background: rgba(244, 208, 111, 0.5);
			color: var(--background);
			font-size: 1.6rem;
			border: 3px solid var(--background);
			border-radius: 5px;
			padding: 10px 5px;
			margin: 10px 5px;
			transition: background 0.3s;

			&:hover,
			&:focus {
				background: var(--nonBinaryGold);
				transition: background 0.3s;
			}

			&::placeholder {
				color: var(--background);
			}
		}

		textarea {
			resize: none;
			height: 148px;
		}

		label {
			display: flex;
			flex-direction: column;
			width: 100%;
			text-transform: uppercase;
			font-size: 1.5rem;
			letter-spacing: 2px;
			margin-bottom: 1.5rem;
			span {
				padding-left: 7px;
				&:after {
					content: "*";
					margin-left: 2px;
					position: relative;
					top: -5px;
					font-size: 1.2rem;
				}
			}
		}

		.name,
		.email {
			width: 100%;
			@media (min-width: 768px) {
				width: 50%;
			}
		}
	}
`;

const Contact = () => {
  const  [ formIsVisible, setFormIsVisible ] = useState(false)

	return (
		<ContactStyles className="grid-wrapper" id="contact">
			<h2>Contact</h2>
			<p className="visualHeading">
				<span>You Picking Up</span> What I'm Putting Down?
			</p>
			<p>
				If you like what you see, (and how could you not?) why not shoot me an
				email? I would love to talk more about your team dynamic and the
				products you create. Best case scenario, we become best friends. Worst
				case scenario I make you laugh and we drift apart.
			</p>
			<button type="button" className="button" onClick={() => setFormIsVisible(true)}>
				Shoot me an email
			</button>
			{formIsVisible && (
				<form
					className="contactForm"
					action="https://formspree.io/xwkrjjnn"
					method="POST"
        >
          <h3>{"Hey look, a <Form>!"}</h3>
          <button type="button" className="closeFormButton" onClick={() => setFormIsVisible(false)} aria-label="Click to hide the form again">+</button>
					<label for="name" className="name">
						<span>Full Name</span>
						<input
							type="text"
							name="name"
							id="name"
							required
						/>
					</label>

					<label for="email" className="email">
						<span>Email</span>
						<input
							type="email"
							name="email"
							id="email"
							required
						/>
					</label>

					<label for="subject" className="subject">
						<span>Subject Line</span>
						<input
							type="text"
							name="subject"
							id="subject"
							required
						/>
					</label>

					<label for="message" className="message">
						<span>Your message</span>
						<textarea
							name="message"
							id="message"
							placeholder="What can I do for you?"
							required
						/>
					</label>

					<button type="submit" className="button" aria-label="Submit the form">
						Finished
					</button>
				</form>
			)}
		</ContactStyles>
	);
};

export default Contact;

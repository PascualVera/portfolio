import "./Contact.css";
import emailjs from "@emailjs/browser";
import pulsar from "../../assets/4demons.svg";
import { useState } from "react";
export default function Contact() {
	const [isLoading, setIsLoading] = useState(false);
	const sendEmail = e => {
		e.preventDefault();
		setIsLoading(true);
		emailjs
			.sendForm("service_290drti", "template", e.target, "50UqDofqrw7824Ax4")
			.then(
				result => {
					if (result.text === "OK") {
						console.log("pinga");

						e.target.reset();
					}
				},
				error => {
					console.log(error.text);
				}
			)
			.then(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="contact">
			<div className="form_wrapper">
				<form
					className="contact_form"
					action="email"
					onSubmit={sendEmail}
					required
				>
					<img className="contact_img" src={pulsar} alt="" srcset="" />
					<div className="contact_title">
						<h3>Send me a message!</h3>
						<p>I'll get back to you as soon as I can.</p>
					</div>
					<input
						type="text"
						name="email"
						placeholder="Email"
						autocomplete="off"
						required
					/>
					<textarea
						className="text_box"
						name="message"
						placeholder="Message"
					></textarea>
					<button className="btn-send" type="submit">
						{isLoading ? "Sending..." : "Send"}
					</button>
					<div className="contact_data">
						<a href="mailto:pascualveradev@gmail.com">
							pascualveradev@gmail.com
						</a>
						|<p>+34 644 215 179</p>
					</div>
				</form>
			</div>
		</div>
	);
}

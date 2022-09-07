import "./Contact.css";
import emailjs from "@emailjs/browser";
import pulsar from "../../assets/4demons.svg";
export default function Contact() {
	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm("service_290drti", "template", e.target, "50UqDofqrw7824Ax4")
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
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
						Send
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

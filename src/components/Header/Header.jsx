import Conway from "../Conway/Conway";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<div className="about_wrapper">
				<div className="title">
					<h1>Pascual Vera</h1>
					<h2>Software developer</h2>
					<div className="social_contact">
						<a href="https://www.linkedin.com/in/pascualvera/">
							<BsLinkedin />
						</a>
						<a href="https://github.com/PascualVera">
							<BsGithub />
						</a>
					</div>
				</div>
				<p className="about"></p>
			</div>
		</header>
	);
}

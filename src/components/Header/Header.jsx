import Conway from "../Conway/Conway";
import LatestProject from "../LatestProject/LatestProject";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<Conway />
			<div className="about_wrapper">
				<div className="title">
					<h1>Pascual Vera</h1>
					<h2>Junior Full Stack Developer</h2>
					<a>CV</a>
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
			<div className="latest_proyect_wrapper">
				<LatestProject />
			</div>
		</header>
	);
}

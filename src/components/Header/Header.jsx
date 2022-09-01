import Conway from "../Conway/Conway";
import LatestProject from "../LatestProject/LatestProject";

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
				</div>
				<p className="about"></p>
			</div>
			<div className="latest_proyect_wrapper">
				<LatestProject />
			</div>
		</header>
	);
}

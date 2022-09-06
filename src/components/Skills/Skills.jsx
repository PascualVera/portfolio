import SkillMenu from "../SkillsMenu/SkillsMenu.jsx";

import "./Skills.css";
export default function Skills() {
	return (
		<article className="skills_wrapper">
			<div className="about_me">
				<div className="test"></div>
				<section className="about_me_text">
					<p>
						My name is Pascual Vera, I am passionate about technology and web
						development.
					</p>
					<p>
						I consider myself a self-taught person, curious, used to teamwork
						and always looking for new learning.
					</p>
					<p>
						I would love to be part of a project that allows me to leave my mark
						on the web and continue to develop professionally.
					</p>
				</section>
			</div>
			<SkillMenu />
		</article>
	);
}

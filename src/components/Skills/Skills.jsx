import SkillMenu from "../SkillsMenu/SkillsMenu.jsx";

import "./Skills.css";
export default function Skills() {
	return (
		<article className="skills_wrapper">
			<div className="about_me">
				<h2>
					<strong>Who am I?</strong>
				</h2>
				<section className="about_me_text">
					<p>My name is Pascual Vera, full-stack developer placed in Coruña.</p>
					<p>
						I consider myself a <strong>self-taught </strong> person, curious,
						used to teamwork and always looking for new learning.
					</p>

					<p>
						I would love to be part of a project that allows me to leave my mark
						on the web and continue to develop professionally.
					</p>
					<strong>
						This is my technological stack, I work every day to improve my
						skills and learn new ones.
					</strong>
				</section>
			</div>
			<SkillMenu />
		</article>
	);
}

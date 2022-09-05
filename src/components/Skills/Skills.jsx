import SkillDetail from "../SkillDetail/SkillDetail.jsx";
import SkillMenu from "../SkillsMenu/SkillsMenu.jsx";
import "./Skills.css";
export default function Skills() {
	return (
		<article className="skills_wrapper">
			<SkillDetail />
			<SkillMenu />
		</article>
	);
}

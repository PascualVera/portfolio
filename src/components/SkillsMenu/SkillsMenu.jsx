import "./SkillsMenu.css";
import angular from "../../assets/TechIcons/Angular.svg";
import Git from "../../assets/TechIcons/Git.svg";
import js from "../../assets/TechIcons/JavaScript.svg";
import mongo from "../../assets/TechIcons/mongodb.svg";
import mySql from "../../assets/TechIcons/MySQL.svg";
import react from "../../assets/TechIcons/reactjs.svg";
import ts from "../../assets/TechIcons/typescript.svg";

export default function SkillMenu() {
	const logos = [
		{ name: "Angular", path: angular },
		{ name: "React", path: react },
		{ name: "JavaScript", path: js },
		{ name: "TypeScript", path: ts },
		{ name: "MySQL", path: mySql },
		{ name: "MongoDB", path: mongo },
		{ name: "Git", path: Git },
	];
	return (
		<article className="skill_menu">
			{logos.map(e => {
				return (
					<div className="skill_logo_wrapper">
						<img className="img" src={e.path}></img>
						<h3>{e.name}</h3>
					</div>
				);
			})}
		</article>
	);
}

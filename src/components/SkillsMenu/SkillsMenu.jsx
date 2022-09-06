import "./SkillsMenu.css";
import { useState } from "react";
import ReactSvg from "../TechIcons/reactjs";
import MySql from "../TechIcons/MySQL";
import JavaScriptSVG from "../TechIcons/JavaScript";
import Angular from "../TechIcons/Angular";
import TypescriptSvg from "../TechIcons/typescript";
import Mongo from "../TechIcons/mongodb";
import Git from "../TechIcons/Git";
import NodeSVG from "../TechIcons/Node";
import SkillDetail from "../SkillDetail/SkillDetail";

export default function SkillMenu() {
	const [currentIcon, setCurrentIcon] = useState("Angular");
	function getIcon() {
		for (const icon of logos) {
			if (icon.name === currentIcon) {
				return { icon: icon.component, content: icon.content };
			}
		}
	}
	const classNames = {
		base: { fill: "logo_fill", stroke: "logo_stroke" },
		active: { fill: "logo_fill_hover", stroke: "logo_stroke_hover" },
	};

	const logos = [
		{
			name: "Angular",
			component: (
				<Angular
					colorFill={
						currentIcon === "Angular"
							? classNames.active.fill
							: classNames.base.fill
					}
					colorStroke={
						currentIcon === "Angular"
							? classNames.active.stroke
							: classNames.base.stroke
					}
				/>
			),
			content: [
				"Directives",
				"Modules",
				"Servicies",
				"Observables",
				"Interfaces",
				"Routing",
				"Pipes",
				"CRUD",
			],
		},
		{
			name: "React",
			component: (
				<ReactSvg
					colorFill={
						currentIcon === "React"
							? classNames.active.fill
							: classNames.base.fill
					}
					colorStroke={
						currentIcon === "React"
							? classNames.active.stroke
							: classNames.base.stroke
					}
				/>
			),
			content: ["NextJS", "Hooks", "State", "Lazy loading", "Routing", "CRUD"],
		},
		{
			name: "JavaScript",
			component: (
				<JavaScriptSVG
					colorFill={
						currentIcon === "JavaScript"
							? classNames.active.fill
							: classNames.base.fill
					}
				/>
			),
			content: [
				"Event-handling",
				"Asyncrony (async/await, promises)",
				"OOP",
				"Functional programming",
			],
		},
		{
			name: "TypeScript",
			component: (
				<TypescriptSvg
					colorFill={
						currentIcon === "TypeScript"
							? classNames.active.fill
							: classNames.base.fill
					}
				/>
			),
			content: ["Interfaces", "Typing", "OOP", "Functional programming"],
		},

		{
			name: "MySql",
			component: (
				<MySql
					colorFill={
						currentIcon === "MySql"
							? classNames.active.fill
							: classNames.base.fill
					}
				/>
			),
			content: ["Querys", "Schemas"],
		},
		{
			name: "MongoDB",
			component: (
				<Mongo
					colorFill={
						currentIcon === "MongoDB"
							? classNames.active.fill
							: classNames.base.fill
					}
					colorStroke={
						currentIcon === "MongoDB"
							? classNames.active.stroke
							: classNames.base.stroke
					}
				/>
			),
			content: ["Querys", "Schemas", "Validators"],
		},
		{
			name: "Node",
			component: (
				<NodeSVG
					colorFill={
						currentIcon === "Node"
							? classNames.active.fill
							: classNames.base.fill
					}
					colorStroke={
						currentIcon === "Node"
							? classNames.active.stroke
							: classNames.base.stroke
					}
				/>
			),
			content: ["Express.js", "WebSockets", "JWT", "API keys", "REST"],
		},
	];

	return (
		<article className="skill_menu">
			<SkillDetail svgComponent={getIcon().icon} content={getIcon().content} />
			<div className="menu_wrapper">
				{logos.map(e => {
					return (
						<div
							onClick={() => {
								setCurrentIcon(e.name);
							}}
							key={e.name}
							className="logo_wrapper"
						>
							{" "}
							<div className="logo">{e.component}</div>
							<h2 className="logo_title">{e.name}</h2>
						</div>
					);
				})}
			</div>
		</article>
	);
}

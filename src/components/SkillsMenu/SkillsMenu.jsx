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

export default function SkillMenu() {
	const [currentIcon, setCurrentIcon] = useState("Angular");

	const classNames = {
		base: { fill: "logo_fill", stroke: "logo_stroke" },
		active: { fill: "logo_fill_hover", stroke: "logo_stroke_hover" },
	};
	function handleCurrentIcon(e) {
		setCurrentIcon(e);
	}
	const logos = [
		{
			name: "Angular",
			path: (
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
		},
		{
			name: "React",
			path: (
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
		},
		{
			name: "JavaScript",
			path: (
				<JavaScriptSVG
					colorFill={
						currentIcon === "JavaScript"
							? classNames.active.fill
							: classNames.base.fill
					}
				/>
			),
		},
		{
			name: "TypeScript",
			path: (
				<TypescriptSvg
					colorFill={
						currentIcon === "TypeScript"
							? classNames.active.fill
							: classNames.base.fill
					}
				/>
			),
		},
		{
			name: "MySql",
			path: (
				<MySql
					colorFill={
						currentIcon === "MySql"
							? classNames.active.fill
							: classNames.base.fill
					}
				/>
			),
		},
		{
			name: "MongoDB",
			path: (
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
		},
		{
			name: "Node",
			path: (
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
		},
		//Need to FIX svg
		// {
		// 	name: "Git",
		// 	path: (
		// 		<Git
		// 			colorFill={
		// 				currentIcon === "Git"
		// 					? classNames.active.fill
		// 					: classNames.base.fill
		// 			}
		// 			colorStroke={
		// 				currentIcon === "Git"
		// 					? classNames.active.stroke
		// 					: classNames.base.stroke
		// 			}
		// 		/>
		// 	),
		// },
	];

	return (
		<article className="skill_menu">
			{logos.map(e => {
				return (
					<div className="logo_wrapper">
						{" "}
						<div
							className="logo"
							onClick={() => {
								handleCurrentIcon(e.name);
							}}
							key={e.name}
						>
							{e.path}
						</div>
						<h2 className="logo_title">{e.name}</h2>
					</div>
				);
			})}
		</article>
	);
}

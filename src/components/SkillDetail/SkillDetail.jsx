import "./SkillDetail.css";
export default function SkillDetail({ svgComponent, content }) {
	return (
		<section className="skill_detail_wrapper">
			<div className="logo_details">{svgComponent}</div>
			<div className="skill_description">
				{content.map(e => {
					return <li>{e}</li>;
				})}
			</div>
		</section>
	);
}

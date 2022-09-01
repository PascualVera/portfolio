import "./LatestProject.css";
import pulsar from "../../assets/4demons.svg";
export default function LatestProject() {
	return (
		<article className="latest_project_wrapper">
			<div className="latest_project_title_wrapper">
				<h2>Latest Project</h2>
				<h3>Personal Portfolio</h3>
			</div>

			<div className="project">
				<figure className="img_wrapper">
					<img src={pulsar} className="pulsar_svg"></img>
				</figure>
				<div className="description">
					<p className="text_description">
						This is my personal portfolio, is made with ReactJS and pure CSS.
					</p>
					<a>View code</a>
				</div>
			</div>
		</article>
	);
}

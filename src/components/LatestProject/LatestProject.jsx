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
					<img src={pulsar} alt="pulsar_img" className="pulsar_svg"></img>
				</figure>
				<div className="description">
					<p className="text_description">
						This is my personal portfolio, built with ReactJS and pure CSS.
					</p>
					<a className="link" href="https://github.com/PascualVera/portfolio">
						View code
					</a>
				</div>
			</div>
		</article>
	);
}

import "./LatestProject.css";
export default function LatestProject() {
	return (
		<article className="latest_project_wrapper">
			<h2 className="latest_project_title">Latest Project</h2>
			<div className="project">
				<figure className="img_wrapper">
					<div></div>
				</figure>
				<div className="description">
					<p className="text_description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum atque
						dicta laudantium perspiciatis officia unde impedit voluptatum vel
						corporis? Expedita ut maxime exercitationem in dicta cumque, nostrum
						temporibus laudantium quis?
					</p>
					<a>View code</a>
				</div>
			</div>
		</article>
	);
}

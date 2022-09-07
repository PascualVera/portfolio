import "./Projects.css";
import books from "../../assets/Books.png";
import dungeon from "../../assets/Dungeon.png";
import movies from "../../assets/Movies.png";
import portfolio from "../../assets/portfolio.png";
import ps5 from "../../assets/ps5.png";
export default function Projects() {
	const mainProjects = [
		{
			name: "Dungeons and Coders",
			url: "https://github.com/PascualVera/dungeonsAndCoders",
			img: dungeon,
			description: "Rol game platform made in Angular and MySQL",
		},
		{
			name: "Alejandria",
			url: "https://github.com/PascualVera/angular",
			img: books,
			description: "E-Commerce built with Angular and MySQL",
		},
		{
			name: "Movies Database",
			url: "https://github.com/PascualVera/mongo/tree/main/imdbMongo",
			img: movies,
			description: "Movie Database built with JS, HTML, CSS and MongoDB",
		},
		{
			name: "PS5 scrapper",
			url: "https://github.com/PascualVera/ps5scrapper",
			img: ps5,
			description: "Node scrap app for finding avaiable PS5",
		},
		{
			name: "Portfolio",
			url: "https://github.com/PascualVera/portfolio",
			img: portfolio,
			description: "Personal portfolio built with ReactJS",
		},
	];

	return (
		<article className="projects">
			<h3> These are some of the projects I have worked on.</h3>

			<div className="projects_wrapper">
				{mainProjects.map(({ name, url, img, description }) => {
					return (
						<a href={url} target="_blank" className="project_item">
							<figure className="project_image_wrapper">
								<img src={img} alt={name} />
							</figure>
							<h3 className="project_description_wrapper">
								<p className="project_description">{description}</p>
								<h3>{name}</h3>
							</h3>
						</a>
					);
				})}
			</div>
		</article>
	);
}

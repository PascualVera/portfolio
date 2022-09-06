import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./components/Navbar/Navbar.css";
import { useRef, useEffect, useState } from "react";

function App() {
	const skills = useRef();
	const header = useRef();
	const projects = useRef();
	const handleScroll = ref => {
		ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
	};
	const [scrollY, setScrollY] = useState(0);

	function logit() {
		setScrollY((window.pageYOffset * 1080) / window.innerHeight);
	}
	useEffect(() => {
		function watchScroll() {
			window.addEventListener("scroll", logit);
		}
		watchScroll();
		console.log(scrollY);
		return () => {
			window.removeEventListener("scroll", logit);
		};
	});
	return (
		<div className="App">
			<nav className="navbar">
				<div className="links_wrapper">
					<button
						className={scrollY < 700 ? "link_active" : "link"}
						onClick={() => {
							handleScroll(header);
						}}
					>
						Home
					</button>
					<button
						className={scrollY > 700 && scrollY < 1400 ? "link_active" : "link"}
						onClick={() => {
							handleScroll(skills);
						}}
					>
						IT Skills
					</button>
					<button
						className={scrollY > 1400 ? "link_active" : "link"}
						onClick={() => {
							handleScroll(projects);
						}}
					>
						Projects
					</button>
					<button className="link">Contact</button>
				</div>
			</nav>
			<div ref={header}>
				<Header />
			</div>
			<div ref={skills}>
				<Skills />
			</div>
			<div ref={projects}>
				<Projects />
			</div>
		</div>
	);
}

export default App;

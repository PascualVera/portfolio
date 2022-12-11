import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./components/Navbar/Navbar.css";
import { useRef, useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Conway from "./components/Conway/Conway";

function App() {
	const skills = useRef();
	const header = useRef();
	const projects = useRef();
	const contact = useRef();
	const [contactFormActive, setContactFormActive] = useState(false);
	const handleScroll = ref => {
		ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
	};
	const [scrollY, setScrollY] = useState(0);
	function formToggle(e) {
		if (e.target.className === "contact_wrapper") {
			setContactFormActive(!contactFormActive);
		}
	}
	function logit() {
		setScrollY((window.pageYOffset * 1080) / window.innerHeight);
	}
	useEffect(() => {
		function watchScroll() {
			window.addEventListener("scroll", logit);
		}
		watchScroll();
		return () => {
			window.removeEventListener("scroll", logit);
		};
	});
	return (
		<div ref={contact} onClick={formToggle} className="App">
			<div
				className={
					contactFormActive ? "contact_wrapper" : "contact_wrapper_disabled"
				}
			>
				<div>
					<Contact />
				</div>
			</div>
			<nav className="navbar">
				<div className="links_wrapper">
					<button
						className={scrollY < 700 ? "nav_link_active" : "nav_link"}
						onClick={() => {
							handleScroll(header);
						}}
					>
						Home
					</button>
					<button
						className={
							scrollY > 700 && scrollY < 1400 ? "nav_link_active" : "nav_link"
						}
						onClick={() => {
							handleScroll(skills);
						}}
					>
						IT Skills
					</button>
					<button
						className={scrollY > 1400 ? "nav_link_active" : "nav_link"}
						onClick={() => {
							handleScroll(projects);
						}}
					>
						Projects
					</button>
					<button
						onClick={() => {
							setContactFormActive(!contactFormActive);
						}}
						className="nav_link"
					>
						Contact
					</button>
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
			<Conway />
		</div>
	);
}

export default App;

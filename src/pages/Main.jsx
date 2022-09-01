import "./Main.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Conway from "../components/Conway/Conway";

export default function Main() {
	return (
		<main className="container">
			<article className="header_wrapper"></article>
			<Conway />
			<div className="div"></div>
		</main>
	);
}

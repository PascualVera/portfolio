import "./Main.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Conway from "../components/Conway/Conway";
import { pulsar } from "../utiils";
export default function Main() {
	return (
		<main className="container">
			{/* <article className="header_wrapper">
				<Navbar />
				<Header />
			</article> */}
			<Conway />
		</main>
	);
}

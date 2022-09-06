import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Skills />
			<Projects />
		</div>
	);
}

export default App;

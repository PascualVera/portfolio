import "./App.css";
import Conway from "./components/Conway/Conway";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<div className="App">
			<Conway />
			<Navbar />
			<Header />
			<Skills />
		</div>
	);
}

export default App;

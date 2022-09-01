import "./App.css";
import Conway from "./components/Conway/Conway";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Conway />
			<Navbar />
			<Header />
		</div>
	);
}

export default App;

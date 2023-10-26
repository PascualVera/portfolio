import style from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Story from './components/Story/Story';
import bg from './assets/background.png';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Header />
      <div className={style.container}>
        <div className={style.bg}>
          <img src={bg} alt="" />
        </div>
        <main>
          <Story />
        </main>

      </div>

    </div>

  );
}
export default App;

import style from './App.module.css';
import Experience from './components/Experience/Experience';
import Story from './components/Story/Story';
import meVectoriced from './assets/meVectoricedcomo.png';
import Conway from './components/Conway/Conway';
import { helloSchema } from './utils/schema';

function App() {
  return (
    <div className={style.App}>
      <div className={style.section_wrapper}>
        <div className={style.conway_container}>
          <Conway schema={helloSchema} isRunning />
        </div>
        <picture className={style.img_container}>
          <img src={meVectoriced} alt="" />
        </picture>
      </div>
      <Story />
      <Experience />
    </div>

  );
}
export default App;

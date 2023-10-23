import style from './App.module.css';
import Experience from './components/Experience/Experience';
import Story from './components/Story/Story';
import meVectoriced from './assets/meVectoriced.svg';
import Conway from './components/Conway/Conway';
import { pulsarSchema as schema } from './utils/schema';

function App() {
  return (
    <div className={style.App}>
      <div className={style.section_wrapper}>
        <div className={style.conway_container}>
          <Conway schema={schema} runningMode="conway" />
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

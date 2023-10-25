import style from './App.module.css';
import meVectoriced from './assets/meVectoricedblue2.svg';
import Conway from './components/Conway/Conway';
import { pulsarSchema as schema } from './utils/schema';
import title from './assets/title.svg';

function App() {
  return (
    <div className={style.App}>
      <div className={style.section_wrapper}>
        <div className={style.conway_container}>
          <Conway schema={schema} runningMode="conway" />
        </div>
        <div className={style.title}>
          <h1 title="Pascual Vera">
            <img src={title} alt="title" />
            <h2>Software developer</h2>
          </h1>
        </div>

        <div className={style.backdrop} />
        <picture className={style.img_container}>
          <img src={meVectoriced} alt="me posing for inkscape" />
        </picture>
      </div>
    </div>

  );
}
export default App;

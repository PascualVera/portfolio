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
        {/* <div className={style.title_container}>
          <h1>
            PASCUAL
            <span className={style.title_surname}>
              <span>VE</span>
              <span>RA</span>
            </span>
          </h1>

        </div> */}

        <h1 className={style.title} title="Pascual Vera">
          <img src={title} alt="title" />
        </h1>

        <div className={style.backdrop} />
        <picture className={style.img_container}>
          <img src={meVectoriced} alt="me posing for inkscape" />
        </picture>
      </div>
    </div>

  );
}
export default App;

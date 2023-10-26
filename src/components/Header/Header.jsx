import style from './Header.module.css';
import meVectoriced from '../../assets/meVectoricedNoGrad.svg';
import Conway from '../Conway/Conway';
import { pulsarSchema as schema } from '../../utils/schema';
import title from '../../assets/title_sharp.svg';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.conway_container}>
        <Conway schema={schema} runningMode="conway" />
      </div>

      <div className={style.backdrop} />
      <div className={style.title}>
        <h1 title="Pascual Vera">
          <img src={title} alt="title" />
        </h1>
        <h2>Software developer</h2>
      </div>
      <picture className={style.img_container}>
        <img src={meVectoriced} alt="me posing for inkscape" />
      </picture>
    </header>
  );
}

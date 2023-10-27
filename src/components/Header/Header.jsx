import style from './Header.module.css';
import meVectoriced from '../../assets/meVectoricedNoGrad.svg';
import Conway from '../Conway/Conway';
import { pulsarSchema as schema } from '../../utils/schema';
import title from '../../assets/title_sharp.svg';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import { buildItemOnSchema } from '../../utils/conway';
import { cellContentType } from '../../utils/cellController';

export default function Header() {
  const icons = [githubIcon, linkedinIcon];
  return (
    <header className={style.header}>
      <div className={style.conway_container}>
        <Conway schema={schema} runningMode="conway" cellXRotation={-45} cellYRotation={-45} cellSize={2.3} />
      </div>

      <div className={style.backdrop} />
      <div className={style.title}>
        <h1 title="Pascual Vera">
          <img src={title} alt="title" />
        </h1>
        <h2>Software developer</h2>
        <Conway
          schema={buildItemOnSchema(icons)}
          cellSize={2.7}
          contentType={cellContentType.Image}
          cellXRotation={-10}
          cellYRotation={-10}
          cellColor="rgba(22,128,252,1)"
        />
      </div>

      <picture className={style.img_container}>
        <img src={meVectoriced} alt="me posing for inkscape" />
      </picture>
    </header>
  );
}

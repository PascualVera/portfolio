import style from './Story.module.css';
import { buildStringOnSchema } from '../../utils/conway';
import Conway from '../Conway/Conway';

export default function Story() {
  const tuMadre = buildStringOnSchema('TUS MUERTOS');

  return (
    <section className={style.container}>
      <div className={style.projects_content}>
        <div className={style.title_wrapper}>
          <Conway schema={tuMadre} isStringSchema cellSize={3} />
        </div>
      </div>
    </section>
  );
}

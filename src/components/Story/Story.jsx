import style from './Story.module.css';
import { buildStringOnSchema } from '../../utils/conway';
import Conway from '../Conway/Conway';

export default function Story() {
  const tuMadre = buildStringOnSchema('PROJECTS');

  return (
    <section className={style.container}>
      <div className={style.projects_content}>
        <div className={style.title_wrapper}>
          <Conway schema={tuMadre} isStringSchema cellSize={3} cellColor="rgba(22,128,252,1)" cellXRotation={-10} cellYRotation={-10} />
        </div>

      </div>

    </section>
  );
}

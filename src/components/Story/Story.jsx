import style from './Story.module.css';
import { buildItemOnSchema } from '../../utils/conway';
import Conway from '../Conway/Conway';
import { cellContentType } from '../../utils/cellController';

export default function Story() {
  const hireMe = buildItemOnSchema('HIRE ME');
  const work = buildItemOnSchema('I NEED A JOB');
  const cold = buildItemOnSchema('IM COLD');

  return (
    <section className={style.container}>
      <div className={style.projects_content}>
        <div className={style.title_wrapper}>
          <Conway
            schema={hireMe}
            contentType={cellContentType.String}
            cellSize={3}
            cellColor="rgba(22,128,252,1)"
            cellXRotation={-10}
            cellYRotation={-10}
          />
          <Conway
            schema={work}
            contentType={cellContentType.String}
            cellSize={3}
            cellColor="rgba(22,128,252,1)"
            cellXRotation={-10}
            cellYRotation={-10}
          />
          <Conway
            schema={cold}
            contentType={cellContentType.String}
            cellSize={3}
            cellColor="rgba(22,128,252,1)"
            cellXRotation={-10}
            cellYRotation={-10}
          />
        </div>
      </div>
    </section>
  );
}

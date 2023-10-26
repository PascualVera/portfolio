import style from './Story.module.css';
import Cell from '../Cell/Cell';

export default function Story() {
  return (
    <section className={style.container}>
      <div className={style.projects_content}>
        <div className={style.title_wrapper}>
          <Cell content="P" state />
          <Cell content="R" state />
          <Cell content="O" state />
          <Cell content="J" state />
          <Cell content="E" state />
          <Cell content="C" state />
          <Cell content="T" state />
          <Cell content="S" state />
        </div>
      </div>

    </section>
  );
}

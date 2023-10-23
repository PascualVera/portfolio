import Cell from '../Cell/Cell';
import style from './Experience.module.css';

export default function Experience() {
  return (
    <section className={style.container}>
      <div className={style.title_wrapper}>
        <div className={style.cell_wrapper}>
          <Cell state color="#cc00ff" />
        </div>
        <h2 className={style.title}>Experience</h2>
      </div>
    </section>
  );
}

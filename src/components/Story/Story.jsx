import Cell from '../Cell/Cell';
import style from './Story.module.css';

export default function Story() {
  return (
    <section className={style.container}>
      <div className={style.title_wrapper}>
        <Cell state color="#0892d0" />
        <h2 className={style.title}>Story</h2>
      </div>
    </section>
  );
}

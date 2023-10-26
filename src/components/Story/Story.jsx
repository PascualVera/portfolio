import style from './Story.module.css';

export default function Story() {
  return (
    <section className={style.container}>
      <div className={style.projects_content}>
        <div className={style.title_wrapper}>
          <h2 className={style.title}>Company Projects</h2>
          <h2 className={style.title}>Freelance</h2>
        </div>
      </div>

    </section>
  );
}

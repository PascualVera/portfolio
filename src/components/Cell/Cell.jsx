import style from './Cell.module.css';

export default function Cell({ state }) {
  return (
    <div className={`${style.cell}`}>
      <div className={`${style.cell_face} ${style.cell_face_front}  ${state ? style.face_alive : null}`} />
      <div className={`${style.cell_face} ${style.cell_face_right}   ${state ? style.face_alive : null}`} />
      <div className={`${style.cell_face} ${style.cell_face_left}   ${state ? style.face_alive : null}`} />
      <div className={`${style.cell_face} ${style.cell_face_top}   ${state ? style.face_alive : null}`} />
    </div>
  );
}

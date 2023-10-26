import style from './Cell.module.css';

import { cellCreation, rotateCell } from '../../utils/cellController';

export default function Cell({
  state, color = '#14c3fc', content, cellWidth = 2, cellHeight = 2,
}) {
  return (
    <div id="cell" style={rotateCell(-15, -15)}>
      <div style={cellCreation('0', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_front}>
        {content ?? content}
      </div>
      <div id="right" style={cellCreation('-90', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_right} />
      <div id="left" style={cellCreation('90', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_left} />
      <div id="top" style={cellCreation('90', 'X', cellWidth, cellHeight, color, state)} className={style.cell_face_top} />
      <div id="back" style={cellCreation('180', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_back} />
      <div id="bottom" style={cellCreation('-90', 'X', cellWidth, cellHeight, color, state)} className={style.cell_face_bottom} />
    </div>
  );
}

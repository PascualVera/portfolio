import style from './Cell.module.css';

import { cellContentType, cellCreation, rotateCell } from '../../utils/cellController';

export default function Cell({
  state, color = '#14c3fc', content, cellWidth = 2, cellHeight = 2, xRotation, yRotation, contentType,
}) {
  const isEmptyContent = (cellContent, isAlive) => {
    if (cellContent === ' ' || !isAlive) {
      return true;
    }
    return false;
  };

  return (
    <div id="cell" className={isEmptyContent(content, state) ? style.empty_content_or_dead_cell : null} style={rotateCell(xRotation, yRotation)}>
      <div style={cellCreation('0', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_front}>
        { contentType === cellContentType.String ? content : null}
        { contentType === cellContentType.Image
          ? <img className={style.cell_image} src={content} alt="eh si" />
          : null}
      </div>
      <div id="right" style={cellCreation('-90', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_right} />
      <div id="left" style={cellCreation('90', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_left} />
      <div id="top" style={cellCreation('90', 'X', cellWidth, cellHeight, color, state)} className={style.cell_face_top} />
      <div id="back" style={cellCreation('180', 'Y', cellWidth, cellHeight, color, state)} className={style.cell_face_back} />
      <div id="bottom" style={cellCreation('-90', 'X', cellWidth, cellHeight, color, state)} className={style.cell_face_bottom} />
    </div>
  );
}

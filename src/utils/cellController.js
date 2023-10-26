const cellCreation = (rotationDegrees, rotationAxis, width, height, color, state) => {
  const cellConstants = {
    position: 'absolute',
    width: `${width}vw`,
    height: `${height}vw`,
    transform: `rotate${rotationAxis}(${rotationDegrees}deg) translateZ(${width / 2}vw)`,
    backgroundColor: `${color}`,
    visibility: state ? 'visible' : 'hidden',

  };
  return cellConstants;
};
const rotateCell = (x, y) => ({
  position: 'relative',
  transformStyle: 'preserve-3d',
  transform: `rotateX(${x}deg) rotateY(${y}deg)`,
});

export { cellCreation, rotateCell };

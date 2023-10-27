const cellCreation = (rotationDegrees, rotationAxis, width, height, color) => ({
  position: 'absolute',
  width: `${width}vw`,
  height: `${height}vw`,
  transform: `rotate${rotationAxis}(${rotationDegrees}deg) translateZ(${width / 2}vw)`,
  backgroundColor: `${color}`,

});
const rotateCell = (x, y) => ({
  position: 'relative',
  transformStyle: 'preserve-3d',
  transform: `rotateX(${x}deg) rotateY(${y}deg)`,

});

const cellContentType = {
  Image: 'Image',
  String: 'String',
};

export { cellCreation, rotateCell, cellContentType };

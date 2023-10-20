const readAscii = (asciiUrl) => (fetch(asciiUrl)
  .then((text) => text.text()));

export default readAscii;

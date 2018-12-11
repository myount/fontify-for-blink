import opentype from 'opentype.js';

export default fontPath => {
  const font = opentype.loadSync(fontPath);

  return {
    name:
      font.names.preferredFamily.en ||
      font.names.preferredFamily[Object.keys(font.names.preferredFamily)[0]],
    subFamily:
      font.names.preferredSubfamily.en ||
      font.names.preferredSubfamily[
        Object.keys(font.names.preferredSubfamily)[0]
      ],
    weight: font.tables.os2.usWeightClass || 400,
  };
};

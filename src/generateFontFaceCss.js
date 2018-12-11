import getFontData from './getFontData';
import generateDataUrl from './generateDataUrl';

const Styles = Object.freeze({
  Italic: 'italic',
  Oblique: 'oblique',
});

export default file => {
  const fontData = getFontData(file);

  return `@font-face {
    font-family: "${fontData.name}";
    font-style: ${Styles[fontData.subFamily] || 'normal'};
    font-weight: ${fontData.weight};
    src: url(${generateDataUrl(file)});
}
`;
};

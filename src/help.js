import version from './version.js';

export default () => {
  console.error(`fontify for blink ${version}
=============================

Usage: fontify-blink [options] <font files...>

Supported file types are those supported by opentype.js.

Options
-------
-o, --output <file>       name of CSS file to output (default: font.css)
`);
};

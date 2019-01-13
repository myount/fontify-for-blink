# Fontify for Blink

Fontify for Blink is a quick-and-dirty tool I wrote to generate font CSS files for the [Blink Shell](https://blink.sh/) terminal for iOS, in order to spare myself the tedium of having to hand-base64-encode and hand-write the `@font-face` blocks for a font that I wanted to add, and also to experiment with writing a command-line Node app using ES6.

## Usage

I'll let it speak for itself:

```
fontify for blink 0.0.1
=============================

Usage: fontify-blink [options] <font files...>

Supported file types are those supported by opentype.js.

Options
-------
-o, --output <file>       name of CSS file to output (default: font.css)
```

## Notes

Fontify is transpiled and bundled using Babel and Rollup, formatted and linted using Prettier and ESLint, and relies on opentype.js for font parsing (to ge the names/weights of the provided fonts), as well as minimist for command line parsing, and ora for a processing indicator.

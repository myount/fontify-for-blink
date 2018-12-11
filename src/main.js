import parseArgs from 'minimist';
import ora from 'ora';
import { writeFileSync } from 'fs';
import { resolve as resolvePath, exists } from 'path';

import help from './help.js';
import generateFontFaceCss from './generateFontFaceCss.js';

export default () => {
  const args = parseArgs(process.argv.slice(2), {
    boolean: ['h', 'help'],
    alias: { o: 'output', h: 'help' },
    default: { o: 'font.css' },
  });

  if (args.help) {
    help();
    return;
  }

  const spinner = ora('Processing...').start();

  const files = args._;
  const outFile = resolvePath(args.output);

  let css = [];
  spinner.start();

  spinner.info(`processing ${files.length} files`);

  files.forEach((file, index) => {
    const fullPath = resolvePath(file);
    const progress = `${(index + 1)
      .toString()
      .padStart(files.length.toString().length)}/${files.length}`;
    spinner.text = `${progress} ${fullPath}`;

    try {
      css.push(generateFontFaceCss(fullPath));
      spinner.succeed(`${progress} ${fullPath}`);
    } catch (e) {
      spinner.fail(
        `${progress} ${fullPath} failed (${e.name}: ${e.message.trim()})`
      );
    }

    if (index < files.length - 1) {
      spinner.start();
    }
  });

  writeFileSync(outFile, Buffer.from(css.join('\n')));
  spinner.succeed(`wrote '${outFile}'`);
};

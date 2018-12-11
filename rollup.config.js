import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['minimist', 'ora', 'opentype.js', 'fs', 'path', 'mime'],
};

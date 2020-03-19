import multiInput from 'rollup-plugin-multi-input';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import image from 'rollup-plugin-image';
import * as react from 'react';
import * as reactDom from 'react-dom';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: ['src/**/index.t(s|sx)'],
  output: [
    {
      dir: './dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    image(),
    resolve({ extensions }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['*.test.ts'],
      clean: true,
    }),
    // ts({ tsconfig: 'tsconfig.json' }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom),
      },
    }),
    multiInput({ relative: 'src/' }),
  ],
};

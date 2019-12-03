/* eslint-disable global-require */
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    plugins: [
      terser(),
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: {
      file: 'umd/dates.js',
      format: 'umd',
      name: 'yourModule',
      esModule: false,
    },
  },
  {
    input: 'src/index.ts',
    plugins: [
      terser(),
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: {
      file: 'esm/dates.js',
      format: 'esm',
    },
  },
]

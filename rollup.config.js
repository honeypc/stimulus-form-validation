import filesize from "rollup-plugin-filesize"
import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
const pkg = require("./package.json")

const name = pkg.name

export default {
  input: "src/index.js",
  external: ["@hotwired/stimulus"],
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.m.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name,
      sourcemap: true,
      globals: {
        "@hotwired/stimulus": "Stimulus",
      },
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
    }),
    filesize(),
  ],
}

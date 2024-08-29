import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: false,
    preserveModules: true,
  },
  external: ["react"],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};

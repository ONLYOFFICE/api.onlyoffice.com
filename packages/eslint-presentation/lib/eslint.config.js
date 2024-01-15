import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin-js"
import jsonc from "eslint-plugin-jsonc"

const w = "warn"

export default [
  eslint.configs.recommended,
  ...jsonc.configs["flat/recommended-with-json"],
  ...jsonc.configs["flat/recommended-with-json5"],
  ...jsonc.configs["flat/recommended-with-jsonc"],
  {
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      // core
      "no-undef": "off",
      "no-unused-vars": [w, {vars: "local"}],
      "no-var": w,
      "prefer-const": w,
      "prefer-arrow-callback": w,

      // stylistic
      "@stylistic/no-mixed-spaces-and-tabs": w,

      // jsonc
      "jsonc/array-bracket-newline": w,
      "jsonc/array-bracket-spacing": w,
      "jsonc/array-element-newline": w,
      "jsonc/comma-style": w,
      "jsonc/indent": [w, 2],
      "jsonc/key-spacing": w,
      "jsonc/object-curly-newline": w,
      "jsonc/object-curly-spacing": w,
      "jsonc/object-property-newline": w
    }
  }
]

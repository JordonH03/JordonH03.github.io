import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
        semi: ["error", "never"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    ignores: [".next/", "node_modules/"]
  }
]
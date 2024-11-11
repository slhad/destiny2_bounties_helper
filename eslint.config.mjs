import stylistic from "@stylistic/eslint-plugin"


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {"plugins":{
    '@stylistic': stylistic
  }},
  {"rules":{
    "@stylistic/semi": ['never', 2],
  }
]
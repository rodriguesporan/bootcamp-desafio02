module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error", // define como erro tudo aquilo que o prettier identificar como não desejável
    "class-methods-use-this": "off", // permiti chamar funções não referênciadas à própria classe
    "no-param-reassign": "off", // permiti reatribuir valor à uma variável passada por parâmetro
    "camelcase": "off", // permite declarar variáveis separadas por underline
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }] // permite declarar variáveis que não serão utilizadas
  },
};

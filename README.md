# Sucrase & Nodemon
Para melhor utilizar o sucrase instale o nodemon
Crie o arquivo nodemon.json na raiz do projeto informando que todos arquivos .js devem ser executados com o sucrase-node

{
  "execMap": {
    "js": "sucrase-node"
  }
}

# Estilização e correção do código
Com yarn em modo desenvolvedor instale as dependências abaixo:
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier -D

## Eslint
### Regras
No arquivo .eslintrc.js adicione essas regras para evitar alguns erros desnecessários

rules: {
  "prettier/prettier": "error", // define como erro tudo aquilo que o prettier identificar como não desejável
  "class-methods-use-this": "off", // permiti chamar funções não referênciadas à própria classe
  "no-param-reassign": "off", // permiti reatribuir valor à uma variável passada por parâmetro
  "camelcase": "off", // permite declarar variáveis separadas por underline
  "no-unused-vars": ["error", { "argsIgnorePattern": "next" }] // permite declarar variáveis que não serão utilizadas
},

### Plugins
No arquivo .eslintrc.js adicione as linhas abaixo
extends: ['airbnb-base', 'prettier'],
plugins: ['prettier'],

### Execução automática
Para identificar todas as falhas, em todos os arquivos execute a linha abaixo:
yarn eslint --fix src --ext .js

## Prettier
Algumas regras importantes do Eslint são sobreescritas pelo Prettier
Para anula-las cri o arquivo .prettierrc na raiz do projeto e adicione as linhas:

{
  "singleQuote": true,
  "trailingComma": "es5"
}

# Editor Config
Com o botão direito do mouse crie o arquivo .editorconfig e altere as linhas abaixo para true:
trim_trailing_whitespace = true
insert_final_newline = true

docker run --name database -e POSTGRES_PASSWORD=docker -d postgres -p 5433:5433

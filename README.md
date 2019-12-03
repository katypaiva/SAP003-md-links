# Markdown Links

## Extraindo os links de um arquivo Markdown (Node.js) v.1.0.0

Markdown é uma linguagem de marcação muito popular entre os programadores. É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc).

Os arquivos Markdown normalmente contém links que muitas vezes estão quebrados, ou que já não são válidos e isso prejudica muito o valor da informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando Node.js, que leia e analise arquivos no formato Markdown, para verificar os arquivos que contenham links e mostrar algumas estatísticas.

## Como instalar :
Para instalar basta rodar em seu terminal a seguinte linha:

 $ npm install -g katypaiva/SAP003-md-links

## Como fazer a utilização :
Para utilizar basta indicar o caminho de seu arquivo.

 $ md-links ./some/example.md

 ## Considerações gerais do projeto :

* `README.md` com descrição do módulo, instruções de instalação e uso,
  documentação da API e exemplos. Tudo que for relevante para qualquer
  desenvolvedora saber como utilizar a sua biblioteca sem inconvenientes.
* `package.json` deve possuir o nome, versão, descrição, autor, licença,
  dependências e scripts (eslint e test).
* `package-lock.json` arquivo gerado pelo npm, para controle dos pacotes
  instalados
* `.eslintrc` com a configuração para o linter. Este arquivo não deve ser
  alterado.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não deve ser
  incluídas no controle de versão (`git`).
* `cli.js` este arquivo deve chamar a função `mdLinks` que será executada pela
  linha de comando.
* `lib/index.js` criação e exportação da função `mdLinks`.
* `lib/__tests__/index.spec.js` deve conter os testes unitários para a função
  `mdLinks`.
* `lib/__tests__/text.md` contém um pequeno texto para teste da biblioteca.
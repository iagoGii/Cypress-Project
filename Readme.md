Este projeto visa facilitar a automação de testes Front-end E2E, proporcionando um ambiente ideal para treinamento e aprimoramento das habilidades em automação.

## Pré-requisitos

- Node.js
- NPM
- Cypress

## Instalação

Processo de instalação para execução dos cenários automatizados. Essa linha de comando irá instalar todas as dependências necessárias para rodar os testes.

```bash
    npm install
```

## Rodando os testes

Esse comando abre o cypress para execuções dos testes.

```bash
    npx cypress open
```
Comando para rodar os testes via terminal.

```bash
    npm run test:chrome
```
## Estrutura do Projeto

- Para utilizar o Cypress da forma correta, é importante compreender alguns aspectos da sua estrutura, como:
    - Na pasta support fica o arquivo js que é o arquivo que guardara o caminho do seu elemento de tela
    - O arquivo commands é utilizado para criação de comandos do seu projeto
    - Na pasta fixture ficam os arquivos .json que são usados nos testest
    - O arquivo cypress.config é utilizado para configurações do projeto, por exemplo, a nossa baseUrl

## Created by

- Iago Oliveira Guedes

# README – Projeto Mobile | Controle de Estoque

## 1. Sobre o Projeto

O aplicativo Mobile de Controle de Estoque foi desenvolvido com o objetivo de facilitar o gerenciamento de produtos, permitindo que os usuários acessem e acompanhem as informações do estoque por meio de dispositivos móveis.

O aplicativo é integrado à API desenvolvida em Laravel, responsável pela comunicação com o banco de dados.

## 2. Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Axios
- AsyncStorage
- React Navigation
- API Laravel

## 3. Funcionalidades

- Tela Splash com apresentação do sistema.
- Login de usuários.
- Cadastro de usuários.
- Tela inicial (Home).
- Consulta e gerenciamento das informações do estoque.
- Cadastro de produtos.
- Definição dos limites de estoque baixo e de alerta.
- Integração com a API Laravel.

## 4. Telas do Aplicativo

**Splash:** apresenta a identidade visual do sistema durante a inicialização.

**Login:** permite que o usuário acesse o aplicativo utilizando suas credenciais.

**Cadastro:** permite registrar novos usuários no sistema.

**Home:** apresenta a área principal do aplicativo e as funcionalidades de gerenciamento do estoque.

## 5. Integração com a API

O aplicativo utiliza requisições HTTP por meio do Axios para se comunicar com a API desenvolvida em Laravel.

A API é responsável por processar as solicitações e acessar os dados armazenados no banco de dados MySQL.

O AsyncStorage é utilizado para armazenar informações de autenticação no dispositivo.

## 6. Instalação e Execução

É necessário ter o Node.js e o npm instalados no computador.

Clone ou acesse a pasta do projeto e execute:

```bash
npm install
```

Para iniciar o projeto:

```bash
npx expo start
```

Após iniciar, utilize o QR Code para abrir o aplicativo em um dispositivo compatível, conforme a configuração de execução utilizada.

## 7. Objetivo

Desenvolver uma aplicação mobile integrada ao sistema web, proporcionando maior praticidade, organização e facilidade no controle de estoque.
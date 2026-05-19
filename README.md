# Projeto Full Stack - Back-end

Projeto desenvolvido para a disciplina de Desenvolvimento Full Stack. Esta etapa consiste na criação, configuração e inicialização da API de Back-end utilizando Node.js, Express e Versionamento com Git.

---

## 🚀 Pré-requisitos e Verificação de Instalação

Antes de iniciar, certifique-se de ter o **Node.js** (que já vem com o **npm**) e o **Git** instalados em sua máquina. Para verificar as instalações, abra o seu terminal e execute os comandos abaixo:

```bash
node -v
npm -v
git --version

🛠️ Configuração e Inicialização do Projeto

## Criar a pasta do projeto e acessar

mkdir fullstack-backend
cd fullstack-backend

## Inicializar o projeto Node.js

npm init -y

## Instalar as dependências necessárias

npm install express cors

## 💻 Estrutura do Código

Crie um arquivo chamado server.js na raiz do projeto e adicione o seguinte código:

"const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/saudacao', (req, res) => {
    const { nome } = req.body;
    res.json({
        mensagem: `Olá ${nome}!`
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});"

## 🏃‍♂️ Executando e Testando a Aplicação

node server.js

## 🗃️ Versionamento com Git

## Inicializar o repositório Git

git init

## Configurar o arquivo .gitignore

node_modules/
.env

## Realizar o primeiro commit

git add .
git commit -m "Projeto inicial"

## Criando Repositórios no GitHub

Criar:

## Conectando repositório local ao GitHub

git remote add origin URL_DO_REPOSITORIO

## Enviando projeto para o GitHub

git branch -M main
git push -u origin main

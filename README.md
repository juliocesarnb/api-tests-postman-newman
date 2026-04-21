# API Tests - Postman + Newman

[![API Tests - Newman](https://github.com/juliocesarnb/api-tests-postman-newman/actions/workflows/api-tests.yml/badge.svg)](https://github.com/juliocesarnb/api-tests-postman-newman/actions/workflows/api-tests.yml)

## 📌 Sobre o projeto

Projeto de automação de testes de API utilizando Postman + Newman com execução em CI via GitHub Actions.

Testes desenvolvidos com foco em:
- Validação de contrato
- Fluxos completos (CRUD)
- Testes negativos
- Validação de performance

---

## 🧪 Tecnologias utilizadas

- Postman
- Newman
- Node.js
- GitHub Actions

---

## 📂 Estrutura do projeto
.
├── collection.json
├── environment.json
├── package.json
└── .github/
└── workflows/
└── ci.yml

---

## 🚀 Como rodar localmente

```bash
npm install
npx newman run collection.json -e environment.json
```

## 🔄 Execução em CI

O pipeline é executado automaticamente a cada push na branch main.

## 📊 Tipos de testes implementados
✔️ POST (Create)
✔️ GET (Read)
✔️ DELETE
✔️ Validação de schema
✔️ Testes negativos
✔️ Performance (tempo de resposta)

##🎯 Objetivo
Demonstrar conhecimento em testes de API com integração contínua, simulando ambiente real de QA em empresas.

## 👨‍💻 Autor
### Júlio Cesar

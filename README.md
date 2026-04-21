# API Tests - Postman + Newman

[![API Tests - Newman](https://github.com/juliocesarnb/api-tests-postman-newman/actions/workflows/api-tests.yml/badge.svg)](https://github.com/juliocesarnb/api-tests-postman-newman/actions/workflows/api-tests.yml)

---

## 📌 Sobre o projeto

Este projeto implementa uma suíte de testes automatizados para APIs REST utilizando **Postman + Newman**, com execução integrada em **CI (GitHub Actions)**.

O objetivo é simular um ambiente real de QA, garantindo qualidade, confiabilidade e estabilidade das operações da API.

---

## 🧠 Objetivos de teste

- Validar fluxos completos de negócio (CRUD)
- Garantir consistência dos dados retornados pela API
- Detectar falhas em cenários inválidos (testes negativos)
- Verificar tempo de resposta e comportamento sob condições reais

---

## 🧪 Tecnologias utilizadas

- Postman (criação e organização dos testes)
- Newman (execução automatizada via CLI)
- Node.js (ambiente de execução)
- GitHub Actions (CI/CD)

---

## 📂 Estrutura do projeto
.
├── collection.json # Collection com os testes
├── environment.json # Variáveis de ambiente
├── package.json # Configuração do projeto
└── .github/
└── workflows/
└── ci.yml # Pipeline CI


---

## 🔁 Fluxo de testes implementado

O projeto cobre um fluxo completo de API:

1. Criar recurso (POST)
2. Buscar recurso (GET)
3. Atualizar recurso (PUT)
4. Validar atualização (GET)
5. Deletar recurso (DELETE)
6. Validar remoção (GET → 404)

---

## ❌ Testes negativos

- Requisição com ID inexistente → 404
- Payload inválido → erro esperado
- Campos obrigatórios ausentes → erro esperado

---

## 📊 Validações realizadas

- Status codes (200, 404, etc.)
- Estrutura da resposta (schema básico)
- Tipos de dados
- Consistência das informações retornadas
- Tempo de resposta (< 500ms)

---

## 🚀 Como rodar localmente

### 1. Instalar dependências

```bash
npm install
```
2. Executar testes
 ```bash
npx newman run collection.json -e environment.json
```
## 🔄 Integração Contínua (CI)

O projeto utiliza GitHub Actions para:

Executar testes automaticamente a cada push
Validar a integridade da API
Bloquear builds em caso de falha

## 📈 Resultados esperados
Todos os testes passando
Nenhuma falha em cenários válidos
Tempo de resposta dentro do limite definido

## 🧩 Diferenciais do projeto
Cobertura de cenários positivos e negativos
Fluxo completo de API (CRUD)
Uso de variáveis dinâmicas (environment)
Execução automatizada em pipeline CI
Estrutura organizada e escalável

## 🎯 Objetivo profissional

Este projeto foi desenvolvido como parte da evolução prática em QA Automation, com foco em demonstrar habilidades aplicáveis em ambientes reais de desenvolvimento e testes.

## 👨‍💻 Autor

### Júlio Cesar

## 📬 Contato

LinkedIn: [https://www.linkedin.com/in/seu-link-aqui](https://www.linkedin.com/in/julio-cesar-nb/)

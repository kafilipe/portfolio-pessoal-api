# Aurora Tours API

API REST simples para gestão de passeios e reservas da Aurora Tours, com autenticação JWT, banco de dados em memória e documentação Swagger.

## Funcionalidades

- Listar e buscar passeios sem autenticação
- Login com JWT para clientes e administradores
- Clientes podem criar, listar e cancelar suas reservas
- Administradores podem criar passeios e visualizar todas as reservas

## Tecnologias

- Node.js
- Express
- JSON Web Token
- Swagger UI + Swagger JSDoc
- Supertest para testes de integração

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node src/server.js
   ```
3. Acesse a documentação Swagger em:
   ```text
   http://localhost:3000/docs
   ```

## Endpoints principais

- GET /passeios
- GET /passeios/:id
- POST /login
- POST /reservas
- GET /reservas
- PATCH /reservas/:id
- POST /passeios
- GET /reservas/admin

## Credenciais iniciais

- Admin: admin@aurora.com / admin123
- Cliente: maria@email.com / cliente123
- Cliente: joao@email.com / cliente123

# 💊 FarmAPI - Backend de Farmácia

Seja bem-vindo ao repositório da **FarmAPI**, um projeto backend desenvolvido para gerenciar produtos de uma farmácia!  
Este sistema permite o cadastro, busca, atualização e exclusão de medicamentos.  

---

## 🚀 Funcionalidades

- 🔍 Buscar produtos por:
  - Nome
  - ID 
  - Categoria (ex: vitaminas, antialérgicos, etc.)
  - Listar todos os produtos cadastrados

- ➕ Cadastrar:
  - Novos medicamentos
  - Novas categorias

- 🔄 Atualizar:
  - Informações de medicamentos
  - Classificação das categorias

- 🗑️ Deletar:
  - Medicamentos
  - Categorias

---

## 🧱 Estrutura das Entidades

### 🧪 Produto
- `nomeProduto`: string – Nome do produto  
- `preco`: number – Preço do produto  
- `laboratorio`: string – Laboratório fabricante  
- `dataVencimento`: Date – Data de validade  
- `categoria`: Relação com a categoria do medicamento  

### 🗂️ Categoria
- `id`: number – Identificador da categoria  
- `descricao`: string – Tipo da categoria (ex: vitamina, analgésico, etc.)

---

## 🛠️ Tecnologias Utilizadas

- ⚙️ **Node.js**
- 🧠 **TypeScript**
- 🧱 **NestJS**
- 🗃️ **TypeORM**
- 🧪 **Insomnia** – para testes das rotas da API

---

## 📬 Rotas da API (exemplos)

| Método | Rota                     | Descrição                          |
|--------|--------------------------|-------------------------------------|
| GET    | `/produtos`              | Lista todos os produtos             |
| GET    | `/produtos/nome/:nome`   | Busca por nome                      |
| GET    | `/produtos/categoria/:id`| Busca por categoria                 |
| POST   | `/produtos`              | Cadastra novo produto               |
| PUT    | `/produtos/:id`          | Atualiza produto                    |
| DELETE | `/produtos/:id`          | Deleta produto                      |

---

## 📥 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/LudmilyS/FarmAPI.git
cd FarmAPI

# Instale as dependências
npm install

# Criar um banco de dados no MySql
CREATE DATABASE db_farmapi

# Rode a aplicação
npm run start:dev

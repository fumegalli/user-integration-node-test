# Sobre:

Imagine que você trabalha em uma empresa e agora você precisa fazer uma integração com
um sistema externo para alimentar sua base de dados. A integração deve ser construída em `JS/TS` em qualquer padrão desejado. Deve haver um
arquivo `readme.md` na raiz do projeto explicado os passos para que seja executada a
integração.

# Adendo

Todas as requisições tem 10% de chance de retornar `500 - Internal Server Error`.
Nesses casos a aplicação deverá efetuar novamente a mesma requisição, garantindo assim
que todos os usuários terão seus endereços preenchidos durante o processo.

# Resultado da Integração

A integração deve salvar um arquivo `json` adicionando a propriedade `address` em todos
os usuários. Se o usuário não tiver endereço o usuário deve ter a propriedade `address`
como `{}` .

<br/><br/>

# Como executar:

1. Instalar dependências:
```
npm ci
```

2. Adicionar variáveis de ambiente:

Criar um arquivo `.env` na raiz do projeto com o padrão exemplificado no arquivo `.env.example`.

3. Iniciar a aplicação:
```
npm start
```

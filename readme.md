# Sobre:

Imagine que você trabalha em uma empresa e agora você precisa fazer uma integração com
um sistema externo para alimentar sua base de dados de usuários. A integração deve ser construída em `JS/TS` em qualquer padrão desejado. Deve haver umarquivo `readme.md` na raiz do projeto explicado os passos para que seja executada a
integração.

# APIs
## Endpoint
### Buscar usuários

Sempre retorna `200 - OK` , salvo [Adendo](#Adendo)

**Path:** /

**Method:** GET

**Response:**
```json
[
  {
  "id": "ce7678fb-c361-4c68-98a8-d46f1cda97c9",
  "isActive": true,
  "firstName": "Bruna",
  "lastName": "Franco",
  "company": "Carvalho - Carvalho",
  "email": "mrcia72@yahoo.com",
  "createdAt": "2000-11-18T16:23:46.917Z"
  },
  {
  "id": "35ab0810-9a99-4f9a-be63-1d1cc99cb9c9",
  "isActive": true,
  "firstName": "Júlio César",
  "lastName": "Macedo",
  "company": "Moreira, Santos and Moreira",
  "email": "ricardo.santos@gmail.com",
  "createdAt": "2009-01-26T11:06:49.945Z"
  },{
  "id": "62e5a6ba-df0b-46c1-acfd-2b23609055ea",
  "isActive": false,
  "firstName": "Norberto",
  "lastName": "Moreira",
  "company": "Carvalho S.A.",
  "email": "hlio_albuquerque@live.com",
  "createdAt": "2006-05-15T05:17:22.381Z"
  },
  ...
]
```

### Buscar endereço do usuário

Retornos possíveis são `200 - OK` e `404 - NOT FOUND`, salvo [Adendo](#Adendo)

**Path:** /`:id`/address

**Method:** GET

**Response:**

Possibilidade 1 (usuário sem endereço): Status: 404

Possibilidade 2 (usuário com endereço): Status: 200 Body:
```json
{
  "street":"Saraiva Rua",
  "number":3385,
  "city":"Bragado Descoberto",
  "state":"Rio Grande do Norte"
}
```

**OBS: A URL base da API externa foi omitida por questões de segurança.**

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

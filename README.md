# challange-boletoflex

O sistema desenvolvido para o desafio, tem como objetivo efetuar o cadastro de clientes, e verificar as informaçoes posteriormente. O código é separado em uma API feito com NodeJS  e o front-end com React.

### Tecnologias usadas

- Node -  Ambiente de execução Javascript server-side
- Express - Framework
- Knex - Query Builder
- ReactJS - Lib Front-end
- StyledComponents - Lib para estilização de componentes
- PostgreSQL - Banco de dados
- Yarn - Gerenciador de Dependências

## Rodando API
 Para rodar a API basta utlizar  os seguintes comandos:
```bash
cd backend
```
 - Utilize o Yarn para para baixar as dependencias.

```bash
 yarn
```

### Configurarndo Banco de dados

O primeiro passo é abrir o arquivo chamado .env.development que está na raiz do projeto backend. O mesmo deve ser preenchido com as informações de seus Banco de dados.

Exemplo:
```bash
DB_SERVER=0.0.0.0
DB_USER=userDB
DB_PASS=password
DB_DATABASE=challenge-boletoflex
PORT_SERVER=3456
```
- OBS: A variavel PORT_SERVER é referente a porta utlizada pelo nodeJS e não pelo postgres. 

### Criação da tabela e colunas no Banco de dados.

Para facilitar o desenvolvimento utilizei um query builder chamado knex. Além dele tornar mais fácil o modo de escervermos o SQL para a aplicação, ele trabalha com o conceito de migrations, para criação de tabelas e colunas no DB.  Execute o comando a baixo para efetuar o procedimento.

Navegue até o diretorio raiz do projeto Backend e execute:

```bash 
yarn migrate:latest  
```

### Rodar o server
Execute o comando a baixo:
```bash
yarn dev
```

### FRONTEND


## Como rodar o Frontend
No frontend da aplicação foi utilizado o React, para trabalharmos com o conceito de web components na web.
```bash
cd frontend
```

### Instalar dependências
 - Utilize o Yarn para para baixar as dependencias.

```bash
> yarn
```

### Rodar o Frontend
Para executar o projeto, digite o comando a seguir:
```bash
 yarn start
```
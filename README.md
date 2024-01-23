# Projeto Nest Limpo

## Tecnologias: Node, Nest, Docker, Postgree

### Passo a passo:

[] - Incializar projeto;
[] - Limpar arquivos desnecssarios como, Prettier, Eslint, arquivos de Testes, scripts de Testes;
[] - Instalar tudo com Npm;
[] - Instalar a biblioteca do eslint com as configurações da Rocketseat;
[] - Criar arquivo de configuração do eslint;
[] - Usar script "lint" para verificar o codigo;
[] - Adicionar rule: {} no eslintrc caso seja necessario;
[] - Criar arquivo de eslintignore para as pastas node_modules e dist;
[] - Criar arquivo do docker-compose, para executar o postgres;
[] - Baixar as bibliotecas do Prisma CLI e o Prisma Client;
[] - Iniciar o Prisma no projeto;
[] - Configura as tabelas como modelos;
[] - Trocar credenciais no arquivo .env;
[] - Criar e executar as migrations;
[] - Recriar os arquivos de Controller dentro de uma pasta especifica;
[] - Criar uma rota padrao de account;
[] - Modificar no arquivo de tsconfig adicionar os strict:true;
[] - Instalar a biblioteca para criar o hash da propriedade de password
[] - Utilizar as tipagens do typescript para biblioteca bcrypt
[] - Criar Pipes como middleware para interceptação e validação de dados;
[] - Tratar os erros que vem dessas validações;
[] - Usar os pipes nos controllers para validar os dados das chamadas http;
[] - Criar arquivo client.http para requisiçoes http;
[] - Criar aquivo env.ts para validação de variaveis de ambiente
[] - Instalar pacote do nestjs/config
[] - No arquivo app.module usar os imports para usar os ConfigureModule e suas configurações;
[] - A partir disso levar a ConfigService para ter acesso as variaveis de ambiente e tipar o service;
[] - Instalar bibliotecas passport e jwt do @nestjs;
[] - Criar uma pasta de para lidar com autenticação, e criar um modulo de autenticação;
[] - Nele trazer as os modulos de Passport e Jwt;
[] - No modulo de JWT fazer as configurações das chaves privadas e publica;
[] - Para as chaves criar usando Openssl;
[] - Codificar as mesma usando base64;
[] - Adicionar este modulo novo na modulo principal;
[] - Criar um controller para esta nova rota, e adiciona-lo como controller;
[] - Trabalhar no codigo para implementar o controller de autneticação, criando o schema do zod e criando a tipagem inferida;
[] - Contruir a rota, com as dependencias necessarias, neste exemplo o JWT e o Prisma;
[] - Usar um Pipe de validação, fazer as verificações dos campos da requisição que vem atraves do Body, principalmente verificar o hash de password com bcrypt;
[] - Configurar o acesso do retorno de token, com assinatura atraves de o id do usuario;
[] - Usar o Guard nas rotas, usando a estrategia de JWT no Passport, criando um arquivo para essa configuração;
[] - Criar schema e tipagem para validar o token;
[] - Criar uma configuração para estrategia usando o jwt no passport;
[] - Criar uma função para validar essas informções que serao o payload do jwt;
[] - Utilizar esse service de estragia no provaider do modulo de autenticação;
[] - Criar um arquivo com uma classe que vai externder authguard com parametro a estrategia neste caso 'jwt';
[] - Pode ser usado o @UseGuard() com essa classe como parametro;
[] - Criar um decorator para ter acesso as informações do usuario;
[] - Criar arquivo current-user-decorator, com informaçoes de contexto, da requisição e passando dados como tipagem o TokenPayload;
[] - Na rota que precisar acessar dado que sao enviados a requisição, neste caso o uuid do usuario como o sub do jwt, usamos nosso decorator;

### Bibliotecas:

- Eslint
- Prisma
- @prisma/client
- Bcryptjs
- @types/bcryptjs
- zod
- zod-validation-error
- @nestjs/config
- @nestjs/passport
- @nestjs/jwt
- passport-jwt
- @types/passport-jwt

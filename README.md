## Intruções para a execução do projeto

- Rode o comando "yarn" para instalar as dependencias do projeto
- Rode o comando "docker run --name gazin-server -e POSTGRES_DB=gazin_database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres" usando o docker para criar o container com o banco de dados
- Roda o comando "yarn typeorm migration:run" para rodar as migrations do projeto
- Crie o arquivo ".env" de acordo com as instruções contidas no arquivo ".env.example"

### Comandos e funcionalidades do projeto

- "yarn dev" executar o projeto na porta configurada

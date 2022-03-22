# front-support

Painel web para visualização de inciddentes

## Pré-requisitos

1. [Git](https://git-scm.com/)

2. [Docker](https://docs.docker.com/engine/installation/)

3. [docker-compose](https://docs.docker.com/compose/install/) 


Baixe o projeto do repositório
```
git clone https://github.com/renatodotlira/api-support.git
```

Execute o seguinte comando para acessar o diretório do projeto

```
cd api-support/
```

Execute o seguinte comando para criar a imagem docker

```
docker build -t app-front .
```

> ⚠️ [Antes de seguir, certifique-se de ter seguido todos os passos no projeto do api-support]
Execute o comando `docker-compose up` para criar criar os containers do projeto, serão criados contâiners para frontend, backend e banco de dados mongo.

```
docker-compose up
```

Acessar o projeto através da url : [http://localhost:4200](http://localhost:4200)

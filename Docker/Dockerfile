# Criando um container Node
FROM node

RUN mkdir -p /geraldo/dh/avanade/src/app

# Criando diretório dentro do container
WORKDIR /geraldo/dh/avanade/src/app

# Copia o Package.json
COPY package*.json ./

# Baixa as dependências
RUN npm install

# Copia o index
COPY index.js ./

# Define a Porta
EXPOSE 3000

# Roda o Projeto
CMD [ "npm", "start" ]


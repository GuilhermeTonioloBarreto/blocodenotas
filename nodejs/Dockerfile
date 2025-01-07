# Use a imagem oficial do Node.js
FROM node:20

# Cria e define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json (se existir) para o container
COPY package*.json ./

# Instala todas as dependências (incluindo as de desenvolvimento)
RUN npm install

# Copia o código-fonte para o diretório de trabalho do container
COPY . .

# Exponha a porta em que o aplicativo irá rodar
EXPOSE 3000

# Comando padrão para iniciar o Nodemon em desenvolvimento
CMD ["npm", "run", "dev"]

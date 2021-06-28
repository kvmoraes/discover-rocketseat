const express = require("express");
const route = require("./route");
//importar o express para a constante "express"
const path = require("path");
const server = express();
//guardando a execução do express dentro do server

server.set("view engine", "ejs");
//responsavel por mostrar o site (view engine) sera o ejs

server.use(express.static("public"));
//static = conteudo estático, nao precisa mudar caminhos

server.set("views", path.join(__dirname, "views"));
//path: mostrar caminho da pasta do projeto; join: juntar; dirname: nome da pasta onde está o arquivo

server.use(express.urlencoded({ extended: true }));
//intermedia o envio de informações do form para o navegador (decodificar)

server.use(route);

server.listen(3000, () => console.log("rodando")); //listen(numero da porta, algo para rodar)
//listen = propriedade do express

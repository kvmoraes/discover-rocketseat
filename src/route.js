const express = require("express");
const route = express.Router();
//route guarda todas as funcionalidades de rotas do express
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController");

route.get("/", (req, res) => res.render("index", { page: "enter-room" })); //req = requisição/ res= resposta
route.get("/create-pass", (re, res) =>
  res.render("index", { page: "create-pass" })
);

route.get("/room/:room", roomController.open);
route.post("/create-room", roomController.create);
route.post("/enterroom", roomController.enter);

route.post("/question/create/:room", questionController.create);
route.post("/question/:room/:question/:action", questionController.index);
//formato que formulários passam informações
// route.post("/room/:room/:question/:action", (req, res) => res.render("exemplo", { req }));
//:alguma coisa = variavel; enviando informações para o navegador, nao usamos get e sim post
//req = recebe as variaveis passadas da pagina exemplo.ejs (<%= req.params.room%>) e (<%= req.params.question%>) e (<%= req.params.action%>)

module.exports = route;

const express = require("express");
const cors = require("cors");
const testeMiddleware = require("./middleware/testeMiddleware");
const logRoutes = require("./middleware/logMiddleware");


const app = express();

app.use(cors());
app.use(express.json());



app.use((req, res, next)=>{
    req.middleware1 = "ok primeiro"
    console.log("Executando o primeiro middleware")
    next()
})


const novoMidleware = (req, res, next)=>{
    req.middleware2 = "ok segundo"
    console.log("Executando o segundo middleware");
    next()
}

app.get("/testando",novoMidleware,testeMiddleware,logRoutes,(req,res)=>{
    console.log(req.middleware1);
    console.log(req.middleware2);
    console.log(req.Middlewareteste);
    res.send("Midleware rodando")
})

app.get("/outraRota",logRoutes, (req,res)=>{
    console.log("Rodando o outraRota")
    res.send("Rodando o log em outra rota")
})

app.listen(9090, ()=>{
    console.log(`Servidor rodando na porta 9090`)
})
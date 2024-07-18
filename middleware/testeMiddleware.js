const testeMiddleware = (req, res, next) =>{
    req.Middlewareteste = "Middleware de outra pasta"
    console.log("Executando o middleware de teste");
    next()
};

module.exports = testeMiddleware;
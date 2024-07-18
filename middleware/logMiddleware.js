const logRoutes = (req, res, next) =>{
    console.log(`Tipo de request : ${req.method}, URL : ${req.url}`);
    next();
}


module.exports = logRoutes;
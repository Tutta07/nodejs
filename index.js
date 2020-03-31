const mod= require ("http");
const fs =require("fs");

const port =3000;

const server = mod.createServer(function(req,res){
  //  console.log(req.url);
    const path=req.url;
    //si elpath es /json devolver un jason
    //se el path for /html devolver un html
    //si no es nada de eso devolver un ola mundo en texto
    if(path=== "/json"){
        res.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        res.end(JSON.stringify({phrase: "Hello World"}));
    }
        else if(path=== "/html"){
            res.statusCode=200;
            res.setHeader("Content-Type", "text/html");
            const data=fs.readFileSync("./assets/index.html","utf-8");
            res.end(data);

        }
        else{
            res.statusCode=200;
            res.setHeader("Content-Type","text/plain");
            res.end("Ola Mundo");
        }
    
    
});

server.listen(port,() => {
    console.log(`Server running at port ${port}/`);
    
});


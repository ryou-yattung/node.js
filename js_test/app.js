const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function(req,res){
     res.writeHead(200, {"Context-Type": "text/html"})
     fs.readFile("index.html", function(error, date){
          if(error){
               res.writeHead(404);
               res.write("error:file not find");
          }else{
               res.write(date);
          }
     })
     res.write("hi");
     res.end();
}) 

server.listen(port, function(error){
     if(error){
          console.log("something wrong", error);
     }else{
          console.log("server is connected"+ port);
     }
})
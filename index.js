// server http
// app create
// config
// create server
//server running
// handle server
const http = require('http');
const url =require('url');
// const url =require('url');
const app={};

app.config={
    port:3000
};

app.createServer=()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`You can start your programming ${app.config.port}`)
    })
}

app.handleReqRes=(req, res)=>{
 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname; 
    // console.log(path)

    const trimmedPath = path.replace(,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;
    res.end('Hello programmer you are great programmer');
}
app.createServer();

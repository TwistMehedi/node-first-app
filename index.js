// server http
// app create
// config
// create server
//server running
// handle server
const http =require('http');

const app={};

app.config={
    port:8080
};
app.createServer=()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Your server run port number in ${app.config.port}`);
    })
}
app.handleReqRes=(req, res)=>{
    res.end('Your work in good')
}
app.createServer();
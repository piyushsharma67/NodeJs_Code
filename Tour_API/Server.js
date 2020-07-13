const express=require('express');
const http=require('http');
const app=require('./APP_Index');

const server=http.createServer(app);
server.listen(3000,()=>{
    console.log("server activated on port 3000");
});
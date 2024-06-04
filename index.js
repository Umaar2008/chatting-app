const { Socket } = require('engine.io')
const express = require('express')
const http = require('http')
const app = express()
const {Server} = require('socket.io')
const server = http.createServer(app)

const io = new Server(server)
//socket io

io.on('connection' , (socket)=>{
socket.on('user-message' , (message)=> {
io.emit('message' , message)

})


})
app.use(express.static(__dirname + '/public'))

server.listen(9000 , function(){
    console.log('Server is running on port 9000')
})

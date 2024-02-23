const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const routes = require('./routes');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));
app.use('/', routes);

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

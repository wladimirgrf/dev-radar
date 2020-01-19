const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

mongoose.connect('mongodb+srv://<user>:<password>@<cluster>',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
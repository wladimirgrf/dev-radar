const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

//Replace mongodb_connection_url with your mongodb connection URL (something like: mongodb+srv://<user>:<password>@<cluster>)

mongoose.connect(`${mongodb_connection_url}`,{
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
import socketio from 'socket.io-client'

const socket = socketio('https://3333-a42b1b0f-155b-485d-88a0-6fc04109c8e2.ws-us02.gitpod.io', {
    autoConnect: false,
})

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude,longitude,techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }
    socket.connect()
}

function disconnect(){
    if(socket.connected){
        socket.disconnect()
    }
}

export{connect,disconnect,subscribeToNewDevs}
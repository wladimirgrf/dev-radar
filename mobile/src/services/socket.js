import socketio from 'socket.io-client'

const socket = socketio('https://3333-ba759df8-60eb-4baa-8eef-738f55487a19.ws-us02.gitpod.io', {
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
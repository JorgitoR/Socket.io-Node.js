

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', ()=> {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback)=> {
        const id = 1234567;
        callback( id );

        socket.broadcast.emit('enviar-mensaje', payload);
    })
}

module.exports = {
    socketController
}
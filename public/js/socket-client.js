
//cliente
const socket = io();

socket.on('connect', () =>{ //event y ()=> nuestro event es conectado

    console.log('Conectado');

});

socket.on('disconnect', () =>{ 

    
    console.log('Desconectado del servidor');

});
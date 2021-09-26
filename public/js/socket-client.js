
//Referencias del Html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

//cliente
const socket = io();

socket.on('connect', () =>{ //event y ()=> nuestro event es conectado

    console.log('Conectado');
    lblOffline.style.display='none';
    lblOnline.style.display='';

});

socket.on('disconnect', () =>{ 
    console.log('Desconectado del servidor');
    
    lblOnline.style.display='none';
    lblOffline.style.display='';

});

socket.on('enviar-mensaje', (payload)=> {

    console.log(payload)
})

//Hasta aqui somos capaces de enviar mensaje del frontend al backend

btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '1233ABC',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, ( id )=>{

        console.log(id)
    })

});




//socket.on para escuchar un evento y socket.emit para emitir un evento